import { apiMercadoLibre } from '../../apis';
import express from 'express';
import { parseIfIntPositive } from '../../utils';

const DEFAULT_GET_ITEMS_LIMIT = 4;

export const getItemsBySearchParameter = async (req: express.Request) => {
  const { q, limit } = req.query;
  // Check if limit received is a valid Number, else set Default Value.
  const searchLimit: number = parseIfIntPositive(limit?.toString()) || DEFAULT_GET_ITEMS_LIMIT;
  const searchParam = q ? q.toString() : '';
  try {
    const response = await apiMercadoLibre.getItemsBySearchParamerter(searchParam, searchLimit);
    const { results, filters } = response.data;
    // Extract categories from Filters.
    const categories = filters.find((x: any) => x.id === 'category').values[0].path_from_root.map((x: any) => x.name);
    // Extract used properties from each Item.
    const items = results.map((item: any) => {
      const { id, title, price, currency_id, condition, thumbnail, shipping, address } = item;
      return {
        id,
        title,
        price: { amount: price, currency: currency_id },
        picture: thumbnail,
        condition,
        free_shipping: shipping?.free_shipping,
        location: address?.state_name,
      };
    });
    return {
      items,
      categories,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getItemAndDescriptionById = async (itemId: string) => {
  try {
    const itemInformation = await apiMercadoLibre.getItemById(itemId);
    const { id, category_id, title, price, currency_id, condition, pictures, shipping, sold_quantity } = itemInformation.data;

    const itemDescription = await apiMercadoLibre.getItemDescriptionById(itemId);
    const { plain_text } = itemDescription.data;

    const itemCategories = await apiMercadoLibre.getItemCategoriesById(category_id);
    const categories = itemCategories.data?.path_from_root.map((x: any) => x.name);

    return {
      id,
      title,
      description: plain_text,
      price: { amount: price, currency: currency_id },
      condition,
      picture: pictures[0].url,
      free_shipping: shipping.free_shipping,
      sold_quantity,
      categories,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

import { apiMercadoLibre } from '../../apis';

export const getItemsBySearchParameter = async (searchParameter: string) => {
  try {
    const response = await apiMercadoLibre.getItemsBySearchParamerter(searchParameter, 4);
    const { results, filters } = response.data;
    const items = results.map((item: any) => {
      const { id, title, price, currency_id, condition, thumbnail, shipping } = item;
      return {
        id,
        title,
        price: { amount: price, currency: currency_id },
        picture: thumbnail,
        condition,
        free_shipping: shipping?.free_shipping,
      };
    });
    return {
      items,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getItemAndDescriptionById = async (itemId: string) => {
  try {
    const itemInformation = await apiMercadoLibre.getItemById(itemId);
    const { id, title, price, currency_id, condition, pictures, shipping, sold_quantity } = itemInformation.data;
    const itemDescription = await apiMercadoLibre.getItemDescriptionById(itemId);
    const { plain_text } = itemDescription.data;
    return {
      id,
      title,
      description: plain_text,
      price: { amount: price, currency: currency_id },
      condition,
      picture: pictures[0].url,
      free_shipping: shipping.free_shipping,
      sold_quantity,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

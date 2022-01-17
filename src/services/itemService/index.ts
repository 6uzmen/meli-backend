import { apiMercadoLibre } from '../../apis';

export const getItemsBySearchParameter = async (searchParameter: string) => {
  try {
    const itemArray = await apiMercadoLibre.getItemsBySearchParamerter(searchParameter);
    return itemArray;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getItemAndDescriptionById = async (itemId: string) => {
  try {
    const itemInformation = await apiMercadoLibre.getItemById(itemId);
    const itemDescription = await apiMercadoLibre.getItemDescriptionById(itemId);
    console.log(itemInformation, itemDescription);
    return itemInformation;
  } catch (error) {
    throw new Error(error.message);
  }
};

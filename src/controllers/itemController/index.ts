import { itemService } from '../../services';

export const getItems = async (req: { searchParameter: string }) => {
  try {
    const itemsArray = await itemService.getItemsBySearchParameter(req.searchParameter);
    console.log(itemsArray);
  } catch (e) {
    console.log(e.message);
  }
};

export const getItemDetails = async (req: { itemId: string }) => {
  try {
    const itemDetails = await itemService.getItemAndDescriptionById(req.itemId);
    console.log(itemDetails);
  } catch (e) {
    console.log(e.message);
  }
};

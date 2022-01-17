import { itemService } from '../../services';
import express from 'express';

export const getItems = async (req: express.Request, res: express.Response) => {
  try {
    const itemsArray = await itemService.getItemsBySearchParameter(req.query.q.toString());
    res.send('Ready!');
    console.log(itemsArray);
  } catch (e) {
    console.log(e.message);
  }
};

export const getItemDetails = async (req: express.Request, res: express.Response) => {
  try {
    const itemDetails = await itemService.getItemAndDescriptionById(req.params.itemId);
    res.send('Ready!');
    console.log(itemDetails);
  } catch (e) {
    console.log(e.message);
  }
};

import { itemService } from '../../services';
import express from 'express';

export const getItems = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const items = await itemService.getItemsBySearchParameter(req.query.q?.toString());
    res.json(items);
    next();
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e.message);
  }
};

export const getItemDetails = async (req: express.Request, res: express.Response) => {
  try {
    const itemDetails = await itemService.getItemAndDescriptionById(req.params.itemId);
    res.send('Ready!');
    // tslint:disable-next-line:no-console
    console.log(itemDetails);
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e.message);
  }
};

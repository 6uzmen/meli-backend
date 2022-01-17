import { itemService } from '../../services';
import express from 'express';

export const getItems = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const items = await itemService.getItemsBySearchParameter(req.query.q?.toString());
    res.json(items);
    next();
  } catch (error) {
    // throw new Error(error.message);
  }
};

export const getItemDetails = async (req: express.Request, res: express.Response) => {
  try {
    const itemDetails = await itemService.getItemAndDescriptionById(req.params.id);
    res.json({ item: itemDetails });
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
    // throw new Error(error.message);
  }
};

import { itemService } from '../../services';
import express from 'express';

export const getItems = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const items = await itemService.getItemsBySearchParameter(req);
    res.json(items);
    next();
  } catch (error) {
    res.send(error).status(500);
  }
};

export const getItemDetails = async (req: express.Request, res: express.Response) => {
  try {
    const itemDetails = await itemService.getItemAndDescriptionById(req.params.id);
    res.json({ item: itemDetails });
  } catch (error) {
    res.send(error).status(500);
  }
};

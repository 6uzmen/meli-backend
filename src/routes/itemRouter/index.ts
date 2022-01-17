import express from 'express';
import { itemController } from '../../controllers';

const router = express.Router();

router.get('/', itemController.getItems);

router.get('/:id', itemController.getItemDetails);

export default router;

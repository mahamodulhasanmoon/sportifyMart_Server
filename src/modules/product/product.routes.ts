// product.routes.ts

import { Router } from 'express';
import {
  bulkUpdateController,
  createProductController,
  deleteProductByIdController,
  getAllProductController,
  getProductByIdController,
  updateProductByIdController,
} from './product.controller';
import { productValidationSchema } from './product.validation';
import { requestValidator } from '../../middlewares/requestValidator';
import { dataFormatter } from '../../middlewares/dataformatter';
import uploader from '../../utils/uploader';

export const productRoutes: Router = Router();

productRoutes.post(
  '/',
  uploader({ thumbnail: 'single', imgUrls: 'multiple' }),
  dataFormatter,
  requestValidator(productValidationSchema),
  createProductController,
);
productRoutes.get('/', getAllProductController);
productRoutes.put('/', bulkUpdateController);
productRoutes.get('/:id', getProductByIdController);
productRoutes.patch('/:id', 
  uploader({ thumbnail: 'single', imgUrls: 'multiple' }),
  dataFormatter,
  updateProductByIdController);
productRoutes.delete('/:id', deleteProductByIdController);

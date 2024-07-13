// product.routes.ts

import { Router } from 'express';
import { createProductController } from './product.controller';
import { productValidationSchema } from './product.validation';
import { requestValidator } from '../../middlewares/requestValidator';
import { dataFormatter } from '../../middlewares/dataformatter';
import uploader from '../../utils/uploader';

export const productRoutes: Router = Router();

productRoutes.post(
  '/',
 uploader({ profilePic: 'single', freatureImgs: 'multiple' }),
  dataFormatter,
  requestValidator(productValidationSchema),

  createProductController,
);

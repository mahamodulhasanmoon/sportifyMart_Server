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
  uploader({ thumbnail: 'single', imgUrls: 'multiple' }),
  dataFormatter,
  requestValidator(productValidationSchema),

  createProductController,
);

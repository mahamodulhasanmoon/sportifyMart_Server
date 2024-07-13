// product.model.ts

import { IProduct } from './product.interface';
import { Product } from './product.model';

export const createProductService = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

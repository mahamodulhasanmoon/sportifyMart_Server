// product.model.ts

import { QueryBuilder } from '../../builder/QueryBuilder';
import { searchableFields } from './product.constant';
import { IProduct } from './product.interface';
import { Product } from './product.model';

export const createProductService = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};
export const getAllProducts = async (queries: any) => {
  const productQuery = new QueryBuilder(Product.find(),queries)
  .sort()
  .search(searchableFields)
  .fields()
  .paginate()
  ;
  const result = productQuery.modelQuery
  return result;
};

export const getProductByIdService = async (id:string) => {
  const result = await Product.findById(id);
  return result;
};
export const deleteProductByIdService = async (id:string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const updateProductByIdService = async (id:string,payload:Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate(id,{
  payload,
  new: true,
  runValidators: true,

  });
  return result;
};

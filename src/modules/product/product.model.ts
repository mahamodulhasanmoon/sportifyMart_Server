// product.model.ts

import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>({
  id: {
    type: String,
    required: true,
    default: uuidv4().slice(0, 6),
    unique: true,
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  stock: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  imgUrls: { type: [String], required: true },
  rating: { type: Number, default: 0 },
});

export const Product = model<IProduct>('Product', productSchema);

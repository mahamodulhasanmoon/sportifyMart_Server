// product.validation.ts

import { z } from 'zod';
export const productValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    price: z
      .number()
      .nonnegative({ message: 'Price must be a non-negative number' }),
    category: z.string().min(1, { message: 'Category is required' }),
    brand: z.string().min(1, { message: 'Brand is required' }),
    stock: z
      .number()
      .int()
      .nonnegative({ message: 'Stock must be a non-negative integer' }),
    rating: z.number().min(0).max(5).optional(),
  }),
});

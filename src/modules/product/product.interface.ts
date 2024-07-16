// product.model.ts
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  thumbnail?: string;
  imgUrls?: string[];
  rating?: number;
}

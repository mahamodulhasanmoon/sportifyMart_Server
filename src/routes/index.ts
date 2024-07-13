import { orderRoutes } from '../modules/order/order.routes';
import { productRoutes } from '../modules/product/product.routes';
import { Router } from 'express';

type IModulerRoutes = { path: string; route: Router }[];

export const modulerRoutes: IModulerRoutes = [
  {
    path: '/products',
    route: productRoutes,
  },
  {
    path: '/orders',
    route: orderRoutes,
  }

];

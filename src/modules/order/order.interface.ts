// order.model.ts
interface IOrderItem {
  productId: string; 
  productName: string; 
  quantity: number; 
  price: number; 
  total: number;
}

export interface IAddress {
  street: string; 
  city: string;
  state: string; 
  postalCode: string; 
  country: string; 
}

export interface IOrder {
orderId:string;
customarName:string;
customarEmail:string;
customarPhone:string;
items:IOrderItem[];
shippingAddress: IAddress;
status: 'pending' | 'on-progress' |'deleveried' | 'rejected' | 'returned';
}


  
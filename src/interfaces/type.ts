export interface IUser {
  id: number;
  name: string;
  password: string;
  role: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
}
export interface IUserLogin {
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  brand: string;
  category: string;
  inStock: boolean;
  imageURL: string;
}

export interface OrderProduct {
  productId: number;
  quantity: number;
}

export interface Order {
  id: string;
  userId: number;
  date: string;
  totalPrice: number;
  products: OrderProduct[];
  status: 'Đang chờ xử lý' | 'Đã giao' | 'Đã hủy';
  shippingAddress: string;
  paymentMethod: 'Credit Card' | 'Debit Card' | 'PayPal' | 'Cash';
  deliveryDate: string;
}

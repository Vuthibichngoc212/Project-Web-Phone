export interface IUser {
  id: number;
  role: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  gender: string;
  address: string;
  birthday: Date | string;
  avatar: File | string;
}
// export interface IUserLogin extends IUser {
//   confirmPassword?: string;
// }
export interface IUserLogin {
  role: string;
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  phone: number;
  gender: string;
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

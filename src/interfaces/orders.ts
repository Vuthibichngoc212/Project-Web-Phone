import { OrderProduct } from './orderProduct';

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

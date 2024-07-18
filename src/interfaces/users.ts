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
export interface IUserData {
  role: string;
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  phone: number;
  gender: string;
  address: string;
  birthday: Date | string;
  avatar: File | string;
}

export type Phone = {
  id: number;
  productName: string;
  productCode: string;
  productPrice: number;
  stockAmount: number;
  image: string;
  productDescription: string;
  fileName: string;
  file: any
  color: string;
  brand: any;
  internalMemory: string;
  reviews: Array<Review>;
};

export type PhoneErrors = {
  productNameError: string;
  productCodeError: string;
  productPriceError: number;
  stockAmountError: number;
  imageError: string;
  productDescriptionError: string;
  fileNameError: string;
  colorError: string;
  brandError: any;
  internalMemoryError: string;
};

export type Review = {
  id: number;
  author: string;
  message: string;
  date: any;
};

export type ReviewData = {
  phoneId: number | string;
  author: string;
  message: string;
};

export type ReviewError = {
  authorError: string;
  messageError: string;
};

export type Order = {
  id: number;
  totalPrice: number;
  date: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  email: string;
  phoneNumber: string;
  postIndex: number;
  orderItems: Array<OrderItem>;
};

export type OrderItem = {
  id: number;
  amount: number;
  quantity: number;
  phone: Phone;
};

export type OrderError = {
  emailError: string;
  firstNameError: string;
  lastNameError: string;
  cityError: string;
  addressError: string;
  postIndexError: string;
  phoneNumberError: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  phoneNumber: string;
  postIndex: string;
  roles: Array<string>;
};

export type UserEdit = {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  city: string | undefined;
  address: string | undefined;
  phoneNumber: string | undefined;
  postIndex: string | undefined;
};

export type UserEditErrors = {
  firstNameError: string;
  lastNameError: string;
};

export type UserData = {
  email: string;
  password: string;
};

export type UserRegistration = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  password2: string;
};

export type UserResetPasswordData = {
  email: string | undefined;
  password: string;
  password2: string;
};

export type AuthErrors = {
  emailError: string;
  firstNameError: string;
  lastNameError: string;
  passwordError: string;
  password2Error: string;
};

export type FilterParamsType = {
  prices: Array<number>;
};

export type PhonePrice = {
  id: number;
  name: string;
  array: Array<number>;
};

export type BrandType = {
  name: string;
  url: string;
};

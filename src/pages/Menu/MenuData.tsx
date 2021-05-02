import { PhonePrice } from "../../types/types";

export const phone: Array<{ name: string }> = [
  { name: "Iphone" },
  { name: "Samsung" },
  { name: "Sony" },
  { name: "Huawei" },
  { name: "Xiaomi" },
  { name: "LG" },
  { name: "Acer" },
  { name: "BlackBerry" },
  { name: "HTC" },
  { name: "Microsoft" },
  { name: "Vestel" },
  { name: "Oppo" },
  { name: "Panasonic" },
  { name: "Philips" },
  { name: "Motorola" },
  { name: "Google" },
  { name: "Razer" },
  { name: "Nokia" },
];

export const price: Array<PhonePrice> = [
  { id: 1, name: "any", array: [] },
  { id: 2, name: "50 - 100 $", array: [50, 100] },
  { id: 3, name: "100 - 250 $", array: [100, 250] },
  { id: 4, name: "250 - 750 $", array: [250, 750] },
  { id: 5, name: "750 - 1500+ $", array: [750, 5000] },
];

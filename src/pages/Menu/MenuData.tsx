import { PhonePrice } from "../../types/types";

export const phone: Array<{ name: string }> = [
  { name: "Burberry" },
  { name: "Bvlgari" },
  { name: "Calvin Klein" },
  { name: "Carolina Herrera" },
  { name: "Chanel" },
  { name: "Creed" },
  { name: "Dior" },
  { name: "Dolce&Gabbana" },
  { name: "Giorgio Armani" },
  { name: "Gucci" },
  { name: "Hermes" },
  { name: "Hugo Boss" },
  { name: "Jean Paul Gaultier" },
  { name: "Lancome" },
  { name: "Paco Rabanne" },
  { name: "Prada" },
  { name: "Tom Ford" },
  { name: "Versace" },
];

export const price: Array<PhonePrice> = [
  { id: 1, name: "any", array: [] },
  { id: 2, name: "15 - 25 $", array: [15, 25] },
  { id: 3, name: "25 - 40 $", array: [25, 40] },
  { id: 4, name: "40 - 90 $", array: [40, 90] },
  { id: 5, name: "90 - 175+ $", array: [90, 250] },
];

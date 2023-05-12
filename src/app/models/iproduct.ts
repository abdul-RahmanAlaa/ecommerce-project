import { DiscountOffers } from "./discount-offers";

export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  cateogryID: number;
  discount?:DiscountOffers
}

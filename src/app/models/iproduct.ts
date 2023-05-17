import { DiscountOffers } from './discount-offers';

export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  backgroundImage: string;
  titelImage: string;
  cateogryID: number;
  Details: string;
  discount?: DiscountOffers;
}

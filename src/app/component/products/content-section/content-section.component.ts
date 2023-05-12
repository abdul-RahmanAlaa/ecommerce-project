import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/models/discount-offers';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss'],
})
export class ContentSectionComponent {
  //1
  Discount: DiscountOffers = DiscountOffers['15%'];
  //2
  adidas: Store = new Store(
    'adidas',
    ['Cairo', 'Giza', 'Sohag', 'Qina'],
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png'
  );
  //3
  clientName: string = '';
  //4
  product1: IProduct = {
    id: 5,
    name: 'shoes',
    quantity: 2,
    price: 2749,
    image:
      'https://assets.adidas.com/images/w_450,f_auto,q_auto/aa048bf416664f588de3ad6600ac438f_9366/GW8336_00_plp_standard.jpg',
    cateogryID: 3,
  };
}

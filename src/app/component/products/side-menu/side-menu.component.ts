import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  listFilter: string = '';
  cateogryFilter!: number;
  priceFilter!: number;

  cartProduct: IProduct[] = [];
  addToCart(product: any): void {
    this.cartProduct = product;
  }

  cartQuantity: any[] = [];
  addQuantity(quantity: any): void {
    this.cartQuantity = quantity;
  }

  getQuantity(product: IProduct): number {
    let value = 0;
    this.cartQuantity.forEach((element) => {
      if (element.id === product.id) {
        value = element.quantity;
      }
    });
    return value;
  }

  removeProduct(product: IProduct): void {
    let index = this.cartProduct.indexOf(product);
    console.log(this.cartProduct.indexOf(product));
    if (index != -1) {
      this.cartQuantity.forEach((element) => {
        if (element.id == product.id) {
          if (element.quantity > 1) {
            element.quantity = element.quantity - 1;
          } else {
            this.cartProduct.splice(index, 1);
          }
        }
      });
    }
  }
}

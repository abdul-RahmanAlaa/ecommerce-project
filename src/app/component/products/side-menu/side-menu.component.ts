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

  @Output() newCartProductEvent: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();
  @Output() newCartQuantityEvent: EventEmitter<any[]> = new EventEmitter<any[]>();

  cartProduct: IProduct[] = [];
  cartQuantity: any[] = [
    {
      id: 0,
      quantity: 0,
    },
  ];

  addToCart(product: IProduct) {
    if (this.cartProduct.includes(product)) {
      this.cartQuantity.forEach((element) => {
        if (element.id == product.id) {
          element.quantity++;
        }
      });
    } else {
      this.cartProduct.push(product);
      let object = {
        id: product.id,
        quantity: 1,
      };
      this.cartQuantity.push(object);
    }
    console.log(this.cartProduct);
    console.log(this.cartQuantity);

    this.newCartProductEvent.emit(this.cartProduct);
    this.newCartQuantityEvent.emit(this.cartQuantity);
  }

  // cartProduct: IProduct[] = [];
  // addToCart(product: any): void {
  //   this.cartProduct = product;
  // }

  // cartQuantity: any[] = [];
  // addQuantity(quantity: any): void {
  //   this.cartQuantity = quantity;
  // }

  // getQuantity(product: IProduct): number {
  //   let value = 0;
  //   this.cartQuantity.forEach((element) => {
  //     if (element.id === product.id) {
  //       value = element.quantity;
  //     }
  //   });
  //   return value;
  // }

  // removeProduct(product: IProduct): void {
  //   let index = this.cartProduct.indexOf(product);
  //   if (index != -1) {
  //     this.cartQuantity.forEach((element) => {
  //       if (element.id == product.id) {
  //         if (element.quantity > 1) {
  //           element.quantity = element.quantity - 1;
  //         } else {
  //           this.cartProduct.splice(index, 1);
  //         }
  //       }
  //     });
  //   }
  // }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  productID!: number;
  product: IProduct | undefined;
  //what is the difference ?
  // product: IProduct | undefined = undefined;
  productIDsArray: number[] = [];
  currentIndex!: number;

  constructor(
    private productsService: ProductsService,
    private activatedRoutes: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productIDsArray = this.productsService.getIDsOfProducts();

    this.activatedRoutes.paramMap.subscribe((params) => {
      this.productID = params.get('productID')
        ? Number(this.activatedRoutes.snapshot.paramMap.get('productID'))
        : 0;
      let result = this.productsService.getProductByID(this.productID);
      if (result) {
        this.product = result;
      } else {
        alert('what r u doing here, go back!');
      }
    });
  }

  allProducts() {
    this.router.navigate(['Browse']);
  }

  previous() {
    this.currentIndex = this.productIDsArray.indexOf(this.productID);
    this.router.navigate([
      'product',
      this.productIDsArray[--this.currentIndex],
    ]);
  }

  next() {
    this.currentIndex = this.productIDsArray.indexOf(this.productID);
    this.router.navigate([
      'product',
      this.productIDsArray[++this.currentIndex],
    ]);
  }
}

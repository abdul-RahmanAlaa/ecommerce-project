import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private productsService: ProductsService,
    private activatedRoutes: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productID = this.activatedRoutes.snapshot.paramMap.get('productID')
      ? Number(this.activatedRoutes.snapshot.paramMap.get('productID'))
      : 0;

    this.product = this.productsService.getProductByID(this.productID);
    console.log(this.product);
  }
}

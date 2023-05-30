import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { CategoryAPIService } from 'src/app/Services/categories-with-api.service';
import { AdminService } from '../../../Services/admin.service';
import { IProduct } from '../../../models/iproduct';
import { ProductsWithApiService } from 'src/app/Services/products-with-api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit, OnDestroy {
  categories: ICategory[] = [];
  lastPId?: number;
  product: IProduct = {} as IProduct;
  productArrIds: number[] = [];
  formProductId: boolean = true;
  formIdValue?: number;
  subscriptions?: Subscription;
  constructor(
    private catApiService: CategoryAPIService,
    private adminApiService: AdminService,
    private prdApiService: ProductsWithApiService,
    private router: Router
  ) {
    this.subscriptions = new Subscription();
    this.subscriptions?.add(
      this.catApiService.getAllCategoriesAPI().subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  ngOnInit(): void {
    this.subscriptions?.add(
      this.prdApiService.getAllProducts().subscribe({
        next: (data) => {
          this.productArrIds = data.map((product) => {
            return product.id;
          });
          this.productArrIds.forEach((id) => {
            if (id == this.productArrIds[this.productArrIds.length - 1]) {
              this.lastPId = id;
            }
          });
        },
        error: (err) => {
          console.log(err);
        },
      })
    );
  }

  addOrEditProduct() {
    if (this.formProductId) {
      this.product['id'] = Number(this.lastPId) + 1;

      this.subscriptions?.add(
        this.adminApiService.addProduct(this.product).subscribe((prd) => {
          this.router.navigate(['/Browse']);
        })
      );
    } else {
      this.subscriptions?.add(
        this.adminApiService.editProduct(this.product).subscribe({
          next: (prd) => {
            console.log('Product updated successfully');
            this.router.navigate(['/Browse']);
          },
          error: (err) => {
            console.log('Error With Edit Product' + err.message);
          },
        })
      );
    }
  }

  deleteProduct() {
    if (!this.formProductId) {
      if (this.formIdValue == 0 || this.formIdValue == undefined) {
        alert('Please enter Product id');
      } else {
        let confirmValue = confirm(
          'Are you sure you want to delete this product'
        );
        if (confirmValue) {
          this.subscriptions?.add(
            this.adminApiService.deleteProduct(this.product).subscribe({
              next: (prd) => {
                alert('Product deleted successfully');
              },
              error: (err) => {
                alert('Error With Delete Product' + err.message);
              },
            })
          );
        }
      }
    }
  }

  formIdField(): boolean {
    this.formProductId = !this.formProductId;
    return this.formProductId;
  }

  searchForId(): void {
    if (this.formIdValue != 0 && this.formIdValue != undefined) {
      this.subscriptions?.add(
        this.prdApiService.getProductByID(this.formIdValue!).subscribe({
          next: (prd) => {
            this.product = prd;
          },
          error: (err) => {
            console.log(err);
            alert('Product not found');
            this.formIdValue = 0;
          },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}

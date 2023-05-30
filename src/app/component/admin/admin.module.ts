import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  { path: 'new-product', component: NewProductComponent, title: 'New Product' },
];

@NgModule({
  declarations: [NewProductComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AdminModule {}

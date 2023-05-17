import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';
import { WildcardComponent } from './component/wildcard/wildcard.component';
import { RoutesGroupComponent } from './component/routes-group/routes-group.component';
import { SingleProductComponent } from './component/products/content-section/single-product/single-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'Home' },
  { path: 'Browse', component: MainComponent, title: 'Browse' },
  {
    path: 'product/:productID',
    component: SingleProductComponent,
    title: 'Product Details',
  },
  {
    path: 'user',
    loadChildren: () => import('src/app/component/user/user.module').then((m) => m.UserModule),
  },

  { path: '**', component: WildcardComponent, title: 'Error 404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

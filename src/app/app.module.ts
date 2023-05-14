import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { FooterComponent } from './component/footer/footer.component';
import { SideMenuComponent } from './component/products/side-menu/side-menu.component';
import { ContentSectionComponent } from './component/products/content-section/content-section.component';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { CreditPipe } from './Pipes/credit.pipe';
import { MainComponent } from './component/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    ContentSectionComponent,
    ProductCardDirective,
    CreditPipe,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomePageComponent} from './pages/home-page.component';
import {AddProductPageComponent} from './pages/add-product-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddProductPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'add', component: AddProductPageComponent },
    ]),
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

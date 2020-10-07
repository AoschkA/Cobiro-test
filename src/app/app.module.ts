import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomePageComponent} from './pages/home-page.component';
import {AddProductPageComponent} from './pages/add-product-page.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductListComponent} from './components/product-list/product-list.component';
import {HeaderComponent} from './components/header/header.component';
import {AddProductFormComponent} from './components/add-product-form/add-product-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddProductPageComponent,
    ProductListComponent,
    HeaderComponent,
    AddProductFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'add', component: AddProductPageComponent },
    ]),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

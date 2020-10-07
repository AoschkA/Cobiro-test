import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {IProduct} from '../types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})

export class HomePageComponent implements OnInit {
  public products: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productList$.subscribe(products => {
      this.products = products;
      console.log(this.products);
    });

    this.productService.getProducts();
  }
}

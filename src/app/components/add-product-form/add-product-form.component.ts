import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html'
})

export class AddProductFormComponent {
  constructor(private productService: ProductService) {}

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    discount: new FormControl(''),
  });

  public onSubmit(): void {
    const data = {
      currency: 'GBP',
      delivery_cost: 0,
      description: this.productForm.get('description').value,
      price:  +this.productForm.get('price').value,
      price_offer: +this.productForm.get('discount').value, // Would like a fallback to price here
      stock: 14,
      sku: 'D509DA-EJ664T-BE',
      title:  this.productForm.get('name').value,
    };

    console.log(data);
    this.productService.newProduct(data).subscribe(res => console.log(res));
  }
}

import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html'
})

export class AddProductFormComponent {
  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    discount: new FormControl(''),
  });
}

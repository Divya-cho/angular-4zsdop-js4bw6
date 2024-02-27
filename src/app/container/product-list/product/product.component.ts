import { Component, Input } from '@angular/core';
import {Product} from './../../../Models/product';
@Component({
  selector: 'product-comp',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComp {
  @Input()
  productt: Product;
}

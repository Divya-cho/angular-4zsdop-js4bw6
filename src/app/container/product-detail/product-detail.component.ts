import { Component, Input } from '@angular/core';
import { Product } from './../../Models/product';
import { ProductList } from './../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComp {
  product: Product;

  @Input()
  productListComp: ProductList = undefined;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }

  isProductDetailsVisible: boolean = true; // Initially visible

}

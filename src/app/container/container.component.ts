import { Component, ViewChild } from '@angular/core';
import { ProductList } from './product-list/product-list.component';

@Component({
  selector: 'container-comp',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComp {
  SearchTextt: string = '';
  @ViewChild(ProductList) productListComp: ProductList;
  onSearchTextUpdated(value: string) {
    console.log(value);
    this.SearchTextt = value;
  }
}

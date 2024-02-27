import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { TopHeader } from './top-header/top-header.component';
import { TopMenu } from './header/top-menu/top-menu.component';
import { MainMenu } from './header/main-menu/main-menu.component';
import { ContainerComp } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductList } from './container/product-list/product-list.component';
import { ProductComp } from './container/product-list/product/product.component';
import { FilterComp } from './container/product-list/filter/filter.component';
import {ProductDetailComp} from './container/product-detail/product-detail.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TopHeader,
    Header,
    TopMenu,
    MainMenu,
    ContainerComp,
    SearchComponent,
    ProductList,
    ProductComp,
    FilterComp,
    ProductDetailComp
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

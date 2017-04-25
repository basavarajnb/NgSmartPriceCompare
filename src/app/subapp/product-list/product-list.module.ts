import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from "app/subapp/product-list/product-list-routing.module";
import { ControlsModule } from "app/controls/controls.module";
import { ProductsFilterComponent } from './componets/products-filter/products-filter.component';
import { ProductListService } from "app/subapp/product-list/services/product-list.service";

@NgModule({
  imports: [
    CommonModule,
    ControlsModule,
    ProductListRoutingModule
  ],
  declarations: [ProductListComponent, ProductsFilterComponent],
  providers: [ProductListService]
})
export class ProductListModule { }

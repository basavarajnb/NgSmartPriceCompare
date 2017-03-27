import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from "app/subapp/product-list/product-list-routing.module";
import { ControlsModule } from "app/controls/controls.module";

@NgModule({
  imports: [
    CommonModule,
    ControlsModule,
    ProductListRoutingModule
  ],
  declarations: [ProductListComponent]
})
export class ProductListModule { }

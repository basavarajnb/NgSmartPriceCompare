import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from "app/controls/controls.module";
import { ProductDetailRoutingModule } from "app/subapp/product-detail/product-detail-routing.module";
import { ProductDetailComponent } from "app/subapp/product-detail/product-detail.component";
import { PriceHistoryComponent } from './components/price-history/price-history.component';

@NgModule({
  imports: [
    CommonModule,
    ControlsModule,
    ProductDetailRoutingModule
  ],
  declarations: [ProductDetailComponent, PriceHistoryComponent],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule { }

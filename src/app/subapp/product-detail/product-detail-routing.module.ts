import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from "app/subapp/product-detail/product-detail.component";
const productDetailRoutes: Routes = [
    { path: 'product', component: ProductDetailComponent },
    { path: 'product/:id', component: ProductDetailComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(productDetailRoutes)
    ],
    exports: [
        RouterModule,
    ]
})
export class ProductDetailRoutingModule { }

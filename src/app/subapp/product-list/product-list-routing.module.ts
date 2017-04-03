import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "app/subapp/product-list/product-list.component";
const productListRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/brand/:brand', component: ProductListComponent },
    { path: 'products/range/:start/:end', component: ProductListComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(productListRoutes)
    ],
    exports: [
        RouterModule,
    ]
})
export class ProductListRoutingModule { }

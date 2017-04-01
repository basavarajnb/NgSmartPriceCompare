import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';

import { ControlsModule } from './controls/controls.module';
import { HomeModule } from "app/subapp/home/home.module";
import { ProductDetailModule } from "app/subapp/product-detail/product-detail.module";
import { ProductListModule } from "app/subapp/product-list/product-list.module";
import { AuthModule } from "app/auth/auth.module";
import { SideNavbarService } from "app/subapp/side-navbar.service";
import { LoginChangesService } from "app/services/login-changes.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ControlsModule,
    AuthModule,
    ProductDetailModule,
    ProductListModule,
    HomeModule,
    AppRoutingModule
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SideNavbarService, LoginChangesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

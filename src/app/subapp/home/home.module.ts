import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "app/subapp/home/home.component";
import { HomeRoutingModule } from "app/subapp/home/home-routing.module";
import { ControlsModule } from "app/controls/controls.module";

@NgModule({
  imports: [
    CommonModule,
    ControlsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }

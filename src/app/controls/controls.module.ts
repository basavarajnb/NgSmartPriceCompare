import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    BannerComponent,
    SearchBarComponent
  ],
  exports: [
    MaterialModule,
    BannerComponent,
    SearchBarComponent
  ]
})
export class ControlsModule {
}

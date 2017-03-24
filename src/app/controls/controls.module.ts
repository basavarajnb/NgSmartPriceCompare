import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from "@angular/material";
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    BannerComponent,
    SearchBarComponent,
    CollapseComponent
  ],
  exports: [
    MaterialModule,
    BannerComponent,
    SearchBarComponent,
    CollapseComponent
  ]
})
export class ControlsModule {
}

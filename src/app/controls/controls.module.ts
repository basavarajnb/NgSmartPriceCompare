import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from "@angular/material";
import { CollapseComponent } from './collapse/collapse.component';
import { CardDeckComponent } from './card-deck/card-deck.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    BannerComponent,
    SearchBarComponent,
    CollapseComponent,
    CardDeckComponent
  ],
  exports: [
    MaterialModule,
    BannerComponent,
    SearchBarComponent,
    CollapseComponent,
    CardDeckComponent
  ]
})
export class ControlsModule {
}

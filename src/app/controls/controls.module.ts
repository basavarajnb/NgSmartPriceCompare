import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    BannerComponent,
    SearchBarComponent
  ],
  exports: [
    BannerComponent,
    SearchBarComponent
  ]
})
export class ControlsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ControlsModule,
      providers: []
    };
  }
}

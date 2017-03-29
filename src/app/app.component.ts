import { Component, ViewChild, HostListener } from '@angular/core';
import { SideNavbarService } from "app/subapp/side-navbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SideNavbarService]
})
export class AppComponent {
  title = 'app works!';
  brandName = 'Brand';
  constructor() {

  }

}

import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from "app/subapp/side-navbar.service";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  navData = {
    brands: [
      { label: 'Samsung', link: '/products/brand/Samsung'},
      { label: 'IPhone', link: '/products/brand/IPhone'},
      { label: 'OnePlus', link: '/products/brand/OnePlus'}
     ],
     priceRanges: [
      { label: 'Under 1000', link: '/products/range/0/1000'},
      { label: '1000 to 5000', link: '/products/range/1000/5000'},
      { label: '5000 to 10000', link: '/products/range/5000/10000'}
     ],
    };
  constructor(private sideNabarService: SideNavbarService) { }

  ngOnInit() {
    this.sideNabarService.sideNavbarToggele.subscribe((val) => {

    });
  }

}

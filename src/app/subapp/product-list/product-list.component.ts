import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SideNavbarService } from "app/subapp/side-navbar.service";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductListService } from "app/subapp/product-list/services/product-list.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<ProductDetail> = new Array<ProductDetail>()

  @ViewChild("sidenav") sidenav;
  navBarMode = "side";

  constructor(private activatedRoute: ActivatedRoute,
    private sideNabarService: SideNavbarService,
    private productListService: ProductListService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let brandName = params['brand'];
        let rangeStart = params['start'];
        let rangeEnd = params['end'];
        if (brandName) {
          this.productListService.getBrandProductList(brandName).subscribe((productListArray) => {
            this.setProductList(productListArray);
          });
          console.log("Brand Name is  "+ brandName);
        } else if (rangeStart !== undefined || rangeStart || rangeEnd) {
          console.log("Price Range:  Start : "+ rangeStart + "  End : "+ rangeEnd );
        }
      });
    this.sideNabarService.sideNavbarToggele.subscribe((val) => {
      this.sidenav.toggle();
    });
  }

  setProductList = (productListArray) => {
    productListArray.forEach(element => {
      this.productList.push(element);
    });
  }

  toggleSidebar() {
    this.sideNabarService.sideNavbarToggele.next("");
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let width = event.target.innerWidth;
    if (width <= 768) {
      this.navBarMode = "over";
    }
    else if (width > 768) {
      this.navBarMode = "side";
    }
  }
}

export class ProductDetail {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  updated: string;
}

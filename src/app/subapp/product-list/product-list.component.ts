import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SideNavbarService } from "app/subapp/side-navbar.service";
import { ActivatedRoute, Params } from "@angular/router";

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
    private sideNabarService: SideNavbarService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        let brandName = params['brand'];
        let rangeStart = params['start'];
        let rangeEnd = params['end'];
        if (brandName) {
          console.log("Brand Name is  "+ brandName);
        } else if (rangeStart !== undefined || rangeStart || rangeEnd) {
          console.log("Price Range:  Start : "+ rangeStart + "  End : "+ rangeEnd );
        }
      });

    this.productList.push({ id: "1111", price: "1200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "12/12/12" })
    this.productList.push({ id: "1111", price: "1200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "12/12/12" })
    this.productList.push({ id: "1111", price: "1200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "12/12/12" })
    this.productList.push({ id: "1111", price: "1200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "12/12/12" })
    this.productList.push({ id: "1111", price: "1200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "12/12/12" })
    this.productList.push({ id: "1111", price: "1200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "12/12/12" })
    this.productList.push({ id: "1111", price: "1200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "12/12/12" })
    this.productList.push({ id: "1111", price: "1200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "12/12/12" })
    this.productList.push({ id: "2222", price: "2200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "13/13/13" })
    this.productList.push({ id: "3333", price: "3200", name: "Product Name", imageUrl: "../../../assets/images/img250.png", updated: "14/14/14" })

    this.sideNabarService.sideNavbarToggele.subscribe((val) => {
      this.sidenav.toggle();
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

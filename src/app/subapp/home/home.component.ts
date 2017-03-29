import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SideNavbarService } from "app/subapp/side-navbar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("sidenav") sidenav;
  navBarMode = "side";

  constructor(private sideNabarService: SideNavbarService) { }

  ngOnInit() {
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

  cardDetails = [
    {
      productName: "Product Name",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name2",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name3",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name4",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name5",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name6",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name7",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name8",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name9",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    },
    {
      productName: "Product Name10",
      imageUrl: "../../../assets/images/img250.png",
      productImageUrl: undefined,
      price: "2500",
      updated: "now"
    }
  ];
}

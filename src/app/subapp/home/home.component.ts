import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

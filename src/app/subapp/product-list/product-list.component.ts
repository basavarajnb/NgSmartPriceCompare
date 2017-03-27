import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<ProductDetail> = new Array<ProductDetail>()
  constructor() { }

  ngOnInit() {
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
  }

}

export class ProductDetail {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  updated: string;
}

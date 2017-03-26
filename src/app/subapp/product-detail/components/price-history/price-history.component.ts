import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})
export class PriceHistoryComponent implements OnInit {
 priceHistoryData: Array<ProductPriceHistory> = new Array<ProductPriceHistory>()
  constructor() { }

  ngOnInit() {
    this.priceHistoryData.push({id: "1111", price: "1200", date:"12/12/12"})
    this.priceHistoryData.push({id: "2222", price: "2200", date:"13/13/13"})
    this.priceHistoryData.push({id: "3333", price: "3200", date:"14/14/14"})
  }

}

export class ProductPriceHistory {
  id: string;
  price: string;
  date: string;
}
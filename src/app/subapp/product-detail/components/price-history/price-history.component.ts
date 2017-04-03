import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from "app/subapp/product-detail/services/product-detail.service";

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})
export class PriceHistoryComponent implements OnInit {
  priceHistoryData: Array<ProductPriceHistory> = new Array<ProductPriceHistory>()
  constructor(private productDetailService: ProductDetailService) { }

  ngOnInit() {
    this.productDetailService.getProductHistory("MOBEKGT2SVHPAHTM", "Flipkart").subscribe((productDetails) => {
      this.assignProductHistoryDetails(productDetails);
    });
  }

  assignProductHistoryDetails(productDetails) {
    productDetails.forEach(element => {
      this.priceHistoryData.push({ id: element.productId, price: element.productPrice, date: element.updatedDate })
    });    
  }
}

export class ProductPriceHistory {
  id: string;
  price: string;
  date: string;
}
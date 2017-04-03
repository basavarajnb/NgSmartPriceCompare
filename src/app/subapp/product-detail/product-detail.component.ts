import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductDetailService } from "app/subapp/product-detail/services/product-detail.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetails;
  constructor(private route: ActivatedRoute,
    private productDetailService : ProductDetailService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.productDetails = {};
    this.productDetailService.getProductById("MOBEKGT2SVHPAHTM", "Flipkart").subscribe((productDetails) => {
      this.productDetails.productId = productDetails.mobileId;
      this.productDetails.productName = productDetails.mobileName;
      this.productDetails.productRating = productDetails.mobileRating;
      this.productDetails.productReviewCount = productDetails.mobileReviewCount;
      this.productDetails.productImageUrl = productDetails.mobileImageUrl;
      this.productDetails.productPrice = productDetails.mobilePrice;
      this.productDetails.productLowestPrice = productDetails.mobileLowestPrice;
    });

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
public collaseBrandList = true;
  public collasePriceRangeList = true;
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
  constructor() { }

  ngOnInit() {
  }

  toggleCollaseBrandList() {
    this.collaseBrandList = !this.collaseBrandList
  }

  toggleCollasePriceRangeList () {
    this.collasePriceRangeList = !this.collasePriceRangeList;
  }

}

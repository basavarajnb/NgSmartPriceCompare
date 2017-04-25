import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";

@Injectable()
export class ProductListService {
    constructor(private http: Http) { }

    getBrandProductList(brandName: string) {
        return this.http.get("http://pricecompare/get-mobile-by-brand.php" + "?brand=" + brandName)
            .map((brandProductList) => {
                return brandProductList.json();
            });
    }
}




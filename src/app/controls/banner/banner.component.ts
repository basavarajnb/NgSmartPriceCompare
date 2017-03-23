import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() brandName;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick () {
    alert("Return to Home");
  }
  onSignInClick() {
    alert("Sign In Is Clicked");    
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { LoginChangesService } from "app/services/login-changes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() brandName;
  signInOrOut: string;
  constructor(private loginchnages: LoginChangesService,
    private router: Router) { }

  ngOnInit() {
    this.loginchnages.loginChangesSubject.subscribe((isSingedIn) => {
      if (isSingedIn) {
        this.signInOrOut = "Sign Out"
      }
      else {
        this.signInOrOut = "Sign In"
      }
    });
  }

  onButtonClick() {
    alert("Return to Home");
  }
  onSignInorOutClick() {
    if (this.signInOrOut == "Sign Out") {
      console.log("Sign Out Button is clicked!");
      this.loginchnages.signOutClickSubject.next(true);
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
}

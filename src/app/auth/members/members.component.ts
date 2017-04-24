import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { LoginChangesService } from "app/services/login-changes.service";
import { UserAuthService } from "app/services/user.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit, OnDestroy {

  name: any;
  state: string = "";

  constructor(public af: AngularFire,
    private router: Router,
    private userAuthService: UserAuthService) {
  }

  logout() {
    this.af.auth.logout();
    this.userAuthService.isUserSignedIn = false;
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    console.log("MembersComponent OnInit");
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.userAuthService.isUserSignedIn = true;
        this.name = auth;
        console.log(auth);
      }
    });
  }

  ngOnDestroy(): void {
  }
}

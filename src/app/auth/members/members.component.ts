import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { LoginChangesService } from "app/services/login-changes.service";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';

  constructor(public af: AngularFire,
    private router: Router,
    private loginChanges: LoginChangesService) {
  }

  logout() {
    this.af.auth.logout();
    this.loginChanges.loginChangesSubject.next(false);
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    console.log("MembersComponent OnInit");
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.loginChanges.loginChangesSubject.next(true);
        this.name = auth;
        console.log(auth);
      }
    });

    this.loginChanges.signOutClickSubject.subscribe((signOutFlag) => {
      console.log("Inside SignOut Click Subj Subscrice!");
      if (signOutFlag === true) {
        this.logout();
      }
    });
  }
}

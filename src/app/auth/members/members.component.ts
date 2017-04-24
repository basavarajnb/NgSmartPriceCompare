import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { LoginChangesService } from "app/services/login-changes.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit, OnDestroy {

  name: any;
  state: string = '';
  private subscription: Subscription = new Subscription();

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

    this.subscription.add(this.loginChanges.signOutClickSubject.subscribe((signOutFlag) => {
      console.log("Inside SignOut Click Subj Subscrice!");
      if (signOutFlag === true) {
        this.logout();
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

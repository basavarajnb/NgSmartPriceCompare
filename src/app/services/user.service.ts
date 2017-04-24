import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { AngularFire } from "angularfire2";
import { Router } from '@angular/router';

@Injectable()
export class UserAuthService {
    isUserSignedIn = false;
    loggedInSubject = new Subject<Boolean>();
    loggedOutSubject = new Subject<Boolean>();

    constructor(public af: AngularFire,
    private router: Router) {
    }

    login() {

    }

    logout() {
        this.af.auth.logout();
        this.isUserSignedIn = false;
        console.log('logged out');
        this.router.navigateByUrl('/');
    }

}
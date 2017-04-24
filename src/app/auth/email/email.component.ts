import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit, OnDestroy {

  state: string = '';
  error: any;
  private subscription: Subscription = new Subscription();

  constructor(public af: AngularFire, private router: Router) {
    this.subscription.add(this.af.auth.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    }));
  }


  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/members']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}

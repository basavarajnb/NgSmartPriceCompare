import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "app/subapp/home/home.component";
import { LoginComponent } from "app/auth/login/login.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { EmailComponent } from "app/auth/email/email.component";
import { MembersComponent } from "app/auth/members/members.component";
import { AuthGuard } from "app/auth/auth.service";
const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

]
@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutingModule { }

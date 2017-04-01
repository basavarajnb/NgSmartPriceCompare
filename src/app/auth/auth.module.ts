import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "app/auth/login/login.component";
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from "app/auth/auth.service";
import { AuthRoutingModule } from "app/auth/auth-routing.module";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
  ],
  providers: [AuthGuard]
})
export class AuthModule { }

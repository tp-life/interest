import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { NbAlertModule, NbInputModule, NbButtonModule } from "@nebular/theme";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    FormsModule,
    NbInputModule,
    CommonModule,
    AuthRoutingModule,
    NbAlertModule,
    NbButtonModule
  ]
})
export class AuthModule { }

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NbAuthComponent} from "@nebular/auth";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {LoginGuard} from "../../guard/login.guard";

const routes: Routes = [
  {
    path: 'auth',
    component: NbAuthComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        canActivateChild: [LoginGuard],
        children:[
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'register',
            component: RegisterComponent,
          }
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

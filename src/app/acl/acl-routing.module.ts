import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {path: "acl",
    component: ListComponent,
    children: [
      {
        path: "detail/:id",
        component: DetailComponent
      },

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AclRoutingModule { }

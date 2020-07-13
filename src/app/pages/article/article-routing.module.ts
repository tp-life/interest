import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {AuthGuard} from "../../guard/auth.guard";

const routes: Routes = [
  {
    path: "article",
    component: ListComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        // canActivateChild: [AuthGuard],
        children: [
          {
            path: "detail/:id",
            component: DetailComponent
          },
        ]
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {
}

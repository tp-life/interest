import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NbIconModule, NbCardModule, NbListModule} from "@nebular/theme";
import { NbSelectModule, NbSearchModule } from "@nebular/theme";
import { EditorDirective } from "../../directive/editor.directive";
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'
import { ListViewModule } from '@syncfusion/ej2-angular-lists'
import { SidebarAllModule} from '@syncfusion/ej2-angular-navigations'

@NgModule({
  declarations: [ListComponent, DetailComponent,EditorDirective],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NbIconModule,
    NbSelectModule,
    NbSearchModule,
    NbCardModule,
    NbListModule,
    DashboardLayoutModule,
    ListViewModule,
    SidebarAllModule
  ]
})
export class ArticleModule { }

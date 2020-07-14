import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditorDirective } from "../../directive/editor.directive";
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts'
import { ListViewModule } from '@syncfusion/ej2-angular-lists'
import { ButtonAllModule, ChipListModule } from "@syncfusion/ej2-angular-buttons";
import { TextBoxModule } from "@syncfusion/ej2-angular-inputs";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListComponent, DetailComponent,EditorDirective],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    DashboardLayoutModule,
    ListViewModule,
    ButtonAllModule,
    ChipListModule,
    TextBoxModule,
    FormsModule
  ]
})
export class ArticleModule { }

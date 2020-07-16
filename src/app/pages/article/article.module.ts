import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleRoutingModule} from './article-routing.module';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {EditorDirective} from "../../directive/editor.directive";
import {DashboardLayoutModule} from '@syncfusion/ej2-angular-layouts'
import {ListViewModule} from '@syncfusion/ej2-angular-lists'
import {ButtonAllModule, ChipListModule} from "@syncfusion/ej2-angular-buttons";
import {TextBoxModule} from "@syncfusion/ej2-angular-inputs";
import {FormsModule} from '@angular/forms';
import {RegTextPipe} from "../../pipe/reg-text.pipe";
import {NbIconModule, NbTooltipModule} from "@nebular/theme";
import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";
import { MenuModule } from "@syncfusion/ej2-angular-navigations";

@NgModule({
  declarations: [ListComponent, DetailComponent, EditorDirective, RegTextPipe],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    DashboardLayoutModule,
    ListViewModule,
    ButtonAllModule,
    ChipListModule,
    TextBoxModule,
    FormsModule,
    NbIconModule,
    NbTooltipModule,
    DropDownListModule,
    MenuModule
  ]
})
export class ArticleModule {
}

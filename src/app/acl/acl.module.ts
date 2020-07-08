import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AclRoutingModule } from './acl-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NbIconModule} from "@nebular/theme";

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    AclRoutingModule,
    NbIconModule
  ]
})
export class AclModule { }

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EditorConfig} from "../../../config/editorConfig";
import { NbAuthService, NbAuthToken } from '@nebular/auth'
import { AuthService } from "../../../service/auth.service";
import { HttpClient } from "@angular/common/http";
import {tap} from "rxjs/operators";
import { AppService } from "../../../service/app.service";

declare var editormd: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[NbAuthService,  HttpClient]
})
export class ListComponent implements OnInit {

  conf = new EditorConfig({height: 'calc(100% - 100px)'});
  public cellSpacing:number[] =[10,10]
  public aspectRatio : any = 100 / 85;

  public dataSource: any = [
    {name: 'IBM', image:'https://ej2.syncfusion.com/demos/src/listview/images/1.png'},
    {name: 'Hello', image:'https://ej2.syncfusion.com/demos/src/listview/images/1.png'},
  ]
  // @ViewChild(EditorDirective, {static: false})
  // private editorMdDirective: EditorDirective;

  constructor(private router: Router, private auth: AuthService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  syncModel(s: string): void {
    console.log(s, "SDFS")
  }

  ngAfterViewInit() {
    const token = this.auth.token
    const valid = this.auth.authValid()
    let d$ =this.http.get("/article?a=34").pipe(tap(x => { console.log(x, 'sd') }))
    d$.subscribe()
    AppService.login.subscribe(x => {
      console.log(x, 111)

    })
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EditorConfig} from "../../../util/editor/editorConfig";

declare var editormd: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  syncModel(s: string): void {
    console.log(s, "SDFS")
  }
}

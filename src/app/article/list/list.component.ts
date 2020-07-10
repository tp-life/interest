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

import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {EditorConfig} from "../../../config/editorConfig";
import {NbAuthService} from '@nebular/auth'
import {AuthService} from "../../../service/auth.service";
import {HttpClient} from "@angular/common/http";
import {EditorDirective} from "../../../directive/editor.directive";
import {NbToastrService} from "@nebular/theme";

declare var editormd: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [NbAuthService, HttpClient]
})
export class ListComponent implements OnInit {

  conf = new EditorConfig({
    height: '100%',
    toolbarIcons: ["undo", "redo", "bold", "hr","fullscreen","image","||","save", "watch","preview"],
    lang: {
      toolbar: {
        save: '保存',
        undo: "撤销"
      }
    },
    toolbarIconsClass: {
      save: "fa-save"
    },
    toolbarHandlers: {
      save: this.save
    }
  });
  public cellSpacing: number[] = [20, 10]
  public aspectRatio: any = 100 / 56;

  @ViewChild(EditorDirective, {static: false})
  private editorMdDirective: EditorDirective;

  public title: string
  public content: string

  constructor(private router: Router, private auth: AuthService, private http: HttpClient, private toast: NbToastrService) {
  }

  ngOnInit(): void {
  }

  syncModel(s: string): void {
    this.content = s
  }

  clearEditor() {
    this.editorMdDirective.clearContent()
  }

  save() {
    if (!this.content || !this.title) {
      this.toast.warning("请输入标题或者内容")
      return
    }

  }

  public focusIn(target: HTMLElement): void {
    target.parentElement.classList.add('e-input-focus');
  }
}

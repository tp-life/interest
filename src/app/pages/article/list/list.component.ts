import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {EditorConfig} from "../../../config/editorConfig";
import {NbAuthService} from '@nebular/auth'
import {AuthService} from "../../../service/auth.service";
import {HttpClient} from "@angular/common/http";
import {EditorDirective} from "../../../directive/editor.directive";
import {NbToastrService} from "@nebular/theme";
import {ArticleCreate, ArticleItem} from "../../../interface/article";
import {ArticleService} from "../../../service/article.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {Subject} from "rxjs";
import {Pagination} from "../../../interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [NbAuthService, HttpClient, ArticleService, NbToastrService]
})
export class ListComponent implements OnInit {

  conf = new EditorConfig({
    height: '100%',
    toolbarIcons: ["undo", "redo", "bold", "hr", "fullscreen", "image", "||", "save", "watch", "preview"],
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
      save: this.save.bind(this)
    }
  });
  public cellSpacing: number[] = [20, 0]
  public aspectRatio: any = 100 / 56;

  @ViewChild(EditorDirective, {static: false})
  private editorMdDirective: EditorDirective;

  public title: string
  public content: string
  private created$ = new Subject<ArticleCreate>();
  private article: Pagination<ArticleItem>

  constructor(private router: Router, private auth: AuthService, private http: HttpClient, private toast: NbToastrService, private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleList()
    this.created$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((data: ArticleCreate) => this.articleService.post(data))
    ).subscribe((x: string) => {
      if (x) {
        this.toast.success("添加文章成功", "Notice")
        this.article = {
          count: this.article.count + 1,
          data: [
            ...this.article.data,
            {
              id: x,
              title: this.title,
              content: this.content,
              status: 1,
              projects: []
            }
          ]
        }
      }
      console.log(this.article, "#")
    })

  }

  clearEditor() {
    this.editorMdDirective.clearContent()
    this.title = ''
  }

  save() {
    this.content = this.editorMdDirective.getMarkdown()
    if (!this.content || !this.title) {
      this.toast.warning("请输入标题或者内容", "Notice")
      return
    }
    this.created$.next(<ArticleCreate>{
      title: this.title,
      content: this.content
    })
  }

  // 标题获取焦点状态
  public focusIn(target: HTMLElement): void {
    target.parentElement.classList.add('e-input-focus');
  }

  articleList() {
    this.articleService.get().subscribe((x: Pagination<ArticleItem>) => this.article = x)
  }
}

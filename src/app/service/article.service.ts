import {Injectable} from '@angular/core';
import {ArticleCreate, ArticleItem, NetArticle} from "../interface/article";
import {HttpClient} from "@angular/common/http";
import {ApiUrl} from "../config/app";
import {Observable} from "rxjs";
import {Pagination} from "../interface";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) {
  }

  // 发布文章
  post(data: ArticleCreate): Observable<any> {
    const rq: NetArticle.ArticlePost = <NetArticle.ArticlePost>data
    return this.http.post(ApiUrl.articleCreate, {...rq, status: 1}).pipe()
  }

  // 列表
  get(): Observable<Object> {
    return this.http.get(ApiUrl.articleCreate, { params: { "size": '20' } }).pipe(
      map((d: NetArticle.ArticleList) => {
        return <Pagination<ArticleItem>>{...d}
      })
    )
  }
}

import {Injectable} from '@angular/core';
import {ArticleCreate, ArticleItem, NetArticle} from "../interface/article";
import {HttpClient} from "@angular/common/http";
import {ApiUrl as url} from "../config/app";
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
  post(data: ArticleCreate): Observable<Object> {
    const rq: NetArticle.ArticlePost = <NetArticle.ArticlePost>data
    return this.http.post(url.articleCreate, {...rq, status: 1}).pipe()
  }

  // 更新
  update(data: ArticleCreate, id: string): Observable<Object> {
    const rq: NetArticle.ArticlePost = <NetArticle.ArticlePost>data
    return this.http.put(url.mapApi(url.articleUpdate, id), rq).pipe()
  }

  // 列表
  get(): Observable<Object> {
    return this.http.get(url.articleCreate, {params: {"size": '20'}}).pipe(
      map((d: NetArticle.ArticleList) => {
        return <Pagination<ArticleItem>>{...d}
      })
    )
  }
}

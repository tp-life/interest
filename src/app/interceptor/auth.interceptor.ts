import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {interval, Observable, throwError} from 'rxjs';
import {AuthService} from "../service/auth.service";
import {environment} from "../../environments/environment";
import {ApiUrl} from "../config/app";
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private  auth: AuthService,
    private route: Router,
    private toast: NbToastrService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const uri = request.url.replace(environment.url, '')
    const apiConf = new ApiUrl()
    if (apiConf.authUrl.includes(uri) && !this.auth.authValid()) {
      this.toast.danger("未登陆，即将前往登陆", '登陆提醒', {duration: 2000})
      const t = interval(2000).subscribe(() => {
        this.route.navigate(['/auth'])
        t.unsubscribe()
      })
      return throwError("该模块需登陆后使用")
    }
    const base = environment.url[environment.url.length-1] == '/'? environment.url.substr(0,environment.url.length - 1):environment.url
    const url = uri[0] == '/' ?uri:  '/' + uri
    const authReq = request.clone({setHeaders: {jwt: this.auth.token}, url: base + url})
    return next.handle(authReq)
  }
}

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from "rxjs/operators";
import {NbToastrService} from "@nebular/theme";
import {Router} from "@angular/router";

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(
    private toast: NbToastrService,
    private route: Router
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            if (event.status != 200) {
              this.toast.danger(event.statusText, '数据请求错误', {hasIcon: false, icon: ''})
            } else if (event.body?.code != 0) {
              this.toast.danger(event.body?.message, '数据请求错误', {hasIcon: false, icon: ''})
            }
            if (event.body?.code == 401) {
              this.route.navigate(['/auth'])
            }
          }
        },
        err => this.toast.danger(JSON.stringify(err), '客户端异常错误', {hasIcon: false, icon: ''})
      ),
      map((event, index: number) => {
        if (event instanceof HttpResponse) {
          const newResp = event.clone({body: event.body.data})
          return newResp
        }
        return event
      })
    )
  }
}

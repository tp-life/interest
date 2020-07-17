import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from "rxjs/operators";
import {NbToastrService} from "@nebular/theme";
import {Router} from "@angular/router";
import { NbTokenStorage } from "@nebular/auth";
import { NbAuthService } from "@nebular/auth";

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(
    private toast: NbToastrService,
    private route: Router,
    private nbService: NbTokenStorage,
    private auth: NbAuthService
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
            event.body?.code == 401 &&  this.route.navigate(['/auth'])
          }
        },
        event => {
          event instanceof HttpErrorResponse && this.toast.danger(event.error instanceof Object?event.error.message:event.error, '数据请求错误' )
           if (event.status == 401) {
             this.route.navigate(['/auth'])
             this.nbService.clear()
           }
        }
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

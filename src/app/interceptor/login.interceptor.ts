import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";
import {AppService} from "../service/app.service";
import {ApiUrl} from "../config/app";
import {environment} from "../../environments/environment";
import {LoginInterface} from "../interface/login";
import { NbAuthService } from "@nebular/auth";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(
    private auth: NbAuthService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = request.url.replace(environment.url, '')
    if (url != ApiUrl.login && url != ApiUrl.register) {
      return next.handle(request)
    }
    return next.handle(request).pipe(
      tap(
        event => {
          event instanceof HttpResponse  && AppService.nextLogin(<LoginInterface>event.body)
          this.auth.refreshToken('email').subscribe()
        }
      )
    );
  }
}

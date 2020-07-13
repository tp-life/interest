import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { BaseInterceptor } from './base.interceptor'
import { AuthInterceptor } from "./auth.interceptor";
import { LoginInterceptor } from "./login.interceptor";

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
]

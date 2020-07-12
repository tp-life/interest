import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { BaseInterceptor } from './base.interceptor'

export const interceptorProviders = [
  { provider: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
]
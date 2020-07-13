import { Injectable } from '@angular/core';
import { LoginInterface } from "../interface/login";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private static self: AppService
  private static  loginInfo:BehaviorSubject<LoginInterface>

  private constructor() {
      AppService.loginInfo = new  BehaviorSubject(null)
  }

  static get login(): Observable<LoginInterface> {
    if (!this.self) {
      AppService.self = new AppService()
    }
    return AppService.loginInfo.pipe()
  }

  static nextLogin(data: LoginInterface) {
    AppService.loginInfo.next(data)
  }
}

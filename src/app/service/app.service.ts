import { Injectable } from '@angular/core';
import { LoginInterface } from "../interface/login";
import { BehaviorSubject, Observable } from "rxjs";

const _loginInfoKey = '_info_key'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private static self: AppService
  private static  loginInfo:BehaviorSubject<LoginInterface> = new BehaviorSubject(null)

  private constructor() {
    const _info = localStorage.getItem(_loginInfoKey)
    let _d: LoginInterface = null
    try {
      _info &&  (_d = JSON.parse(_info))
    } catch (error) {}
    AppService.loginInfo.next(_d)
  }

  static get login(): Observable<LoginInterface> {
    this.self || (AppService.self = new AppService())
    return AppService.loginInfo.pipe()
  }

  static nextLogin(data: LoginInterface) {
    localStorage.setItem(_loginInfoKey, JSON.stringify(data))
    AppService.loginInfo.next(data)
  }
}

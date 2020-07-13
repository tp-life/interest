import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../service/auth.service";


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild {
  constructor(
    private route: Router,
    private  auth: AuthService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.checkLogin(state.url)) {
      return this.route.parseUrl('')

    }
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }

  checkLogin(url: string): boolean {
    if ((url.includes('login') || url.includes('register'))) {
      return  this.auth.authValid()
    }
    return false
  }

}

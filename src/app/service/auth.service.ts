import {NbAuthService, NbAuthToken} from '@nebular/auth'
import {tap} from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
  private key: string

  constructor(
    private service: NbAuthService
  ) {
  }


  get token(): string {
    if (!this.key) {
      this.service.getToken().subscribe((token: NbAuthToken) => {
        this.key = token.getValue()
      })
    }
    return this.key
  }

  authValid(): boolean {
    let v: boolean
    this.service.isAuthenticated().pipe(
      tap(valid => v = valid)
    ).subscribe()
    return v
  }

}

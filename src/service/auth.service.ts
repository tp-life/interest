import { NbAuthJWTToken } from '@nebular/auth'

export class AuthService {
  constructor(
    private service: NbAuthJWTToken
  ) { }

  get token(): string {
    return ""
  }
}
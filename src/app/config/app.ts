export class AppConfig {

}

export class ApiUrl {
  static login = '/login'
  static register = '/register'
  static article ='/article'
  constructor() {
  }

  get authUrl(): string[] {
    return []
  }
}

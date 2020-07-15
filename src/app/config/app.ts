export class AppConfig {

}

export class ApiUrl {
  static login = '/login'
  static register = '/register'
  static article ='/article'
  static articleCreate = '/post' // 添加文章
  constructor() {
  }

  get authUrl(): string[] {
    return []
  }
}

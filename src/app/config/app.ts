export class AppConfig {

}

export class ApiUrl {
  static login = '/login'
  static register = '/register'
  static article ='article'
  static articleCreate = 'post' // 添加文章
  static articleUpdate = 'post/:id/up'// 编辑文章

  get authUrl(): string[] {
    return []
  }

  static mapApi(url: string, param: string | number ): string {
    const reg =/\/(:.*?)\//g
    return url.replace(reg, `/${String(param)}/`)
  }
}

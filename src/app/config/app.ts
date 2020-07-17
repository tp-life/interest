export class AppConfig {

}

export class ApiUrl {
  static login = '/login'
  static register = '/register'
  static article ='article'
  static articleCreate = 'post' // 添加文章
  static articleUpdate = 'post/:id/up'// 编辑文章
  static articleStatus = 'post/:id/st' // 修改状态
  static articleDel = 'post/:id' // 修改状态

  get authUrl(): string[] {
    return []
  }

  static mapApi(url: string, param: string | number ): string {
    url = url[url.length -1] == '/'?url:url+'/'
    const reg =/\/(:.+?)\//g
    const newUrl = url.replace(reg, `/${String(param)}/`)
    return newUrl.substr(0,newUrl.length -1)
  }
}

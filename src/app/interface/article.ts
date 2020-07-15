import {Pagination} from "./index";

export interface ArticleCreate {
  tags?: string[] // 标签
  title: string // 标题
  content: string // 内容
  status?: number // 状态
}

// ID       string   `json:"id"`
// Projects []string `json:"projects"` // 被哪些专题收录
// Title    string   `json:"title" form:"title" binding:"required"`
// Tags     []string `json:"tags" form:"tags"`     // 标签
// Status   int8     `json:"status" form:"status"` // 发布状态 1 发布 0 草稿箱 -1 禁用
// Likes    int      `json:"likes"`                // 喜欢数
// Fav      int      `json:"fav"`                  // 收藏数
// Comment  int      `json:"comment"`              // 评论数
export interface ArticleItem {
  id: string
  projects: string[]
  title: string
  content: string
  tags?: string[]
  status?: number
  likes?: number
  fav?: number
  comment?: number

}

// 网络请求数据
export namespace NetArticle {
  export interface ArticlePost extends ArticleCreate { } // 添加数据
  export interface ArticleList extends Pagination<ArticleItem>{} // 文章列表

}

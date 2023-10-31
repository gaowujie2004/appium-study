/**
 * @description 视频详情页的评论列表爬取
 */

class CommentService {
  private driver!: WebdriverIO.Browser;

  constructor(driver: WebdriverIO.Browser) {
    this.driver = driver;
  }

  commentUnit() {
    // 头像、用户昵称、等级、发布日期
    // 内容、（是否可以展开？ 可点击）
    //
  }

  async getUserAvatar() {
    this.driver.$('//android.widget.LinearLayout[@resource-id="tv.danmaku.bili:id/avatar_layer"]');
  }
}

//android.widget.LinearLayout[@resource-id="tv.danmaku.bili:id/expand_search"]

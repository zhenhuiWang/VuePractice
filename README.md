# Webpack & Vue/Vuex/vue-router

### 运行预览

1.`npm install`

2.`npm run dev` 打开

### 说明:

主要包括了对vue, vue-router, vuex学习的小练习

webpack2.0配置了开发环境，生产环境

### 实现几个小案例（2.5d practice Folder）

- [案例1](http://www.gbtags.com/gb/demoviewer/10407/a6b8d138-4f9f-4b2e-812e-416ece45b95f/example1.html.htm)
- [案例2](http://www.gbtags.com/gb/demoviewer/10407/a6b8d138-4f9f-4b2e-812e-416ece45b95f/example2.html.htm)
- [案例3](http://www.gbtags.com/gb/demoviewer/10407/a6b8d138-4f9f-4b2e-812e-416ece45b95f/example3.html.htm)
- [案例4](http://www.gbtags.com/gb/demoviewer/10407/a6b8d138-4f9f-4b2e-812e-416ece45b95f/example4.html.htm)
- [案例5](http://www.gbtags.com/gb/demoviewer/10407/a6b8d138-4f9f-4b2e-812e-416ece45b95f/example5.html.htm)

### 数据筛选（1d）

- 自己找3种类型的图片，数量各不相等，7+9+11
- 做一个页面，上面有7个按钮
- - 所有分类
  - 分类A
  - 分类B
  - 分类C
  - 分类A+B
  - 分类B+C
  - 分类A+C
- 下面是图片展示，一行3个
- 点击对应的按钮，显示对应的图片
- 每次点击按钮（不是点击同一个按钮多次），图片都要乱序显示
- [功能参考](http://demos.clientapprove.com/NYT_tiffany/)

### 项目考察（8d React_R29 Folder）

- 使用react实现从前的一个项目
- [预览地址](http://www.clientapprove.com/preview/R29_holiday_gift_curator/)
- [素材下载](https://github.com/fpg-wx/training/raw/master/assets/mvvm-gift.zip)
- 功能说明
  - 总共5种person类型：
    - mom
    - dad
    - s.o.
    - bff
    - work spouse
  - 总共6种trait类型
    - chill
    - chic aesthete
    - emo
    - type a
    - early adopter
    - fancy
  - 数据
    - 来源：[点击访问](https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9)
    - 节点：`items[0].fields.jsonFull.feed.entry`
    - 相关属性：（值在$t节点）
      - 所属person：`gsx$person`
      - 所属trait：`gsx$trait`
      - 链出地址：`gsx$clickouturl`
      - 描述文字：`gsx$description70charactersmax`
      - 封面图片：`gsx$image`
      - 产品名称：`gsx$itemname`
      - 产品价格：`gsx$price`
      - 产品类型：`gsx$type`
  - 每次可以选择1个person+3个trait，之后展示出对应的产品列表
  - 点击person页面第6个按钮，随机选择1个person+3个trait组合，并直接展示产品列表
  - 在产品列表可以单独替换person，或单独替换trait，并展示产品列表
  - 也可以直接重新选择person和trait，并展示产品列表
  - 未选择person，或未选满3个trait，则无法继续下一步操作
- 要点：
  - 根据用户不同的选项组合，显示不同的结果页面
- 简化
  - 不需要地址栏实时刷新
  - 不需要路由
  - 不需要动画效果
  - 专注功能就行，排版看得过去就可以
  - 不需要sponsored产品
  - 只需要chrome正常工作就行

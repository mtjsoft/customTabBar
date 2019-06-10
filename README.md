# 1、前言

很多时候，小程序自带的tabBar不能够满足项目需求，这个时候就需要我们自定义tabBar了。但是在网上找了很久，基本都是存在切换时闪烁的问题。幸运的是从基础库2.5.0开始，可以官方使用自定义tabBar了。

# 2、自定义tabBar样式

如下图所示，我们需要一个展示“首页”、“我的”，和一个可以点击跳转到发布的tabBar。这种样式，原生的就无法满足需求了，只能自定义tabBar了。

![自定义tabBar](https://img-blog.csdnimg.cn/20190610142635503.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Nzc5MDgz,size_16,color_FFFFFF,t_70)

# 3、引入custom-tab-bar及相关配置

3.1、如下图所示，将custom-tab-bar导入项目根目录

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190610143732795.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Nzc5MDgz,size_16,color_FFFFFF,t_70)

3.2、在app.json中配置好切换的tabbar，并设置"custom": true，然后将基础库设置成2.5.0

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190610143951378.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Nzc5MDgz,size_16,color_FFFFFF,t_70)

3.3、使用自定义TabBar，在切换的TabBar界面的onShow中添加如下代码。如首页中设置 selected: 0，我的中设置 selected: 2。因为 selected: 1 是特殊跳转，点击加号图标时，不再是切换tabbar，而是直接跳转发布界面了。

```
/**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log('设置选中项 0')
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
```

**本人公众号，关注一波，共同交流吧。**

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019012509485178.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI4Nzc5MDgz,size_16,color_FFFFFF,t_70)

后来发现使用AdAdblock Plus自定义过滤规则也能实现我想要的功能，现在贴出自定义规则。

```
http://pos.baidu.com/*
https://pos.baidu.com/*
http://googleads.g.doubleclick.net/*
https://googleads.g.doubleclick.net/pagead/ads
###content_right
###qb-side
##.lemmaWgt-promotion-vbaike
##.lemmaWgt-promotion-slide
###under_post_kb
```

## 需求

工作中使用百度时，总有一些推荐的信息使我工作分心，打断我工作。我便写一个浏览器插件，屏蔽百度推荐等功能。

就是屏蔽这些东西

![](http://github.com/programluo/cleanbaidu/raw/master/doc/image/20170815154738654.jpeg)

![](http://github.com/programluo/cleanbaidu/raw/master/doc/image/20170815154816855.jpeg)

![](http://github.com/programluo/cleanbaidu/raw/master/doc/image/20170815154844775.jpeg)




如何使用
在谷歌浏览器中输入chrome://extensions/并跳转。选中开发者模式，点击“加载已解压的扩展程序…”，选择cleanbaidu目录。

![](http://github.com/programluo/cleanbaidu/raw/master/doc/image/20170815155141663.jpeg)

![](http://github.com/programluo/cleanbaidu/raw/master/doc/image/20170815155229988.jpeg)

如果从浏览器的搜索框直接搜索进入百度，无法屏蔽baidu热点，需要把页面刷新一下




实现方式：http://blog.csdn.net/luo4105/article/details/77193828


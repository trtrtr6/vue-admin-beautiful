# 介绍

- Vue
- Element
- Vue-admin-beautiful

<p align="left">
    <img src="https://img.shields.io/badge/vue-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/vuex-始终基于最新版-brightgreen.svg" >
    <img src="https://img.shields.io/badge/vue--router-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/@vue/cli-始终基于最新版-brightgreen.svg">
    <img src="https://img.shields.io/badge/axios-始终基于最新版-brightgreen.svg">
</p>

## 简介

演示地址:[vue-admin-beautiful](http://chu1204505056.gitee.io/vue-admin-beautiful)

## vue-admin-beautiful 前端讨论群-1 972435319

不管您加或者不加 您都可以享受到开源的代码 感谢您的支持 群里的任何问题我都会一一解答 感谢您的信任
![image](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm.png)

## vue-admin-beautiful 前端讨论群-VIP 805808910

群内问题优先回答 群主每周在线授课 提供脚手架搭建在线指导 组件封装方法指导 NPM 发包开发组件指导
![image](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm_vip.png)

## 梦想

你相信吗?未来要和你共度一生的那个人，其实在与你相同的时间里，也忍受着同样的孤独，那个人一定也怀着满心的期待，拥着一腔孤勇，穿过茫茫人海，也要来与你相见，愿世间美好与你环环相扣...

## 鸣谢 花裤衩的开源项目给了我不少灵感（tagsview 在花大佬的基础上改造）

## 感谢

感谢捐赠者 每当看到微信钱包有入账的时候 都非常的激动 但我不知道你们的名字 谢谢你们的支持 如果您有任何问题都可以微信 QQ 找我一起讨论 我一定知无不言 言无不尽

## 捐赠

![image](https://chu1204505056.gitee.io/byui-bookmarks/img/donation.png)

## 致歉

最近演示网站总被不知名人士攻击恶意劫持到其他网站，在此向大家致歉，烦请攻击的大哥放过。。。

## 目录结构

## 安装

```bash
# 克隆项目
git clone https://github.com/chuzhixin/vue-element-admin-beautiful.git

# 进入项目目录
cd vue-element-admin-beautiful
# 安装依赖,一定要用cnpm,不要试图去用npm换成淘宝镜像这种方式,最近情况特殊,国外网站封锁的厉害
cnpm i
# 本地开发 启动项目
npm run serve
```

## 浏览器支持情况

Modern browsers and Internet Explorer 11+.

<!-- prettier-ignore -->
| [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img class="no-margin" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
|  IE11, Edge| last 2 versions| last 2 versions| last 2 versions

# 全局配置

## setting.js 配置

- 说明：这里有好多你会用到的配置项。
- 示例代码：

```js
module.exports = {
  title: "vue-admin-beautiful", //标题
  abbreviation: "byui", //简写
  devPort: "80", //开发环境端口号
  version: "V2.2", //版本号
  copyright: "初志鑫1204505056@qq.com", //烦请保留版权，如需去除请联系群主
  routesWhiteList: ["/login", "/404", "/401"],
  loadingText: "正在加载中...", //加载时显示文字
  tokenName: "accessToken", //token名称
  tokenTableName: "BYUI-VUE-TABLE", //token表名
  storage: "localStorage", //token存储位置
  logo: true, //是否显示logo
  header: "noFixed", //固定fixed 不固定noFixed
  layout: "vertical", //横纵布局 horizontal vertical
  themeBar: true, //是否开启主题配置按钮
  tagsView: true, //是否显示多标签页
  colorWeakness: false, //色弱模式
  messageDuration: 2000, //消息框消失时间
  requestTimeout: 5000, //最长请求时间
  successCode: 200, //操作正常code
  invalidCode: 402, //登录失效code
  errorCode: 500, //系统异常code
  noPermissionCode: 401, //无权限code
  errorLog: ["development", "staging", "production"], //是否显示在页面高亮错误
  shieldF12: false, //设置生产环境是否屏蔽f12等开发组工具快捷键
  loginInterception: true, //是否开启登录拦截
  loginRSA: false, //是否开启登录RSA加密
  httpRequestFile: false, //是否依据mock数据生成webstorm HTTP Request请求文件
  authentication: "intelligence", //intelligence和all两种方式，前者后端权限只控制roles不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
};
```

## variables.scss 配置

- 说明：这里可以修改你项目的配色方案。
- 示例代码：

```scss
@charset "utf-8";
@charset "utf-8";
/* byui scss全局变量开始 */
$base-color-default: #009688;

$base-menu-background: #001529;
$base-menu-active-background: $base-color-default;
$base-menu-text: #ffffff;
$base-menu-text-active: #ffffff;
$base-title: #ffffff;

$base-font-size-small: 12px;
$base-font-size-default: 14px;
$base-font-size-big: 16px;
$base-font-size-bigger: 18px;
$base-font-size-max: 22px;
$base-color-header: $base-menu-background;
$base-color-blue: $base-color-default;
$base-color-green: #13ce66;
$base-color-white: #ffffff;
$base-color-black: #000000;
$base-color-yellow: #ffba00;
$base-color-red: #ff4d4f;
$base-color-gray: #97a8be;
$base-main-width: 1279px;
$base-border-radius: 2px;
$base-border-color: #ebeef5;
$base-form-width: 600px;
$base-input-height: 32px;
$base-pagination-height: 28px;
$base-dialog-title-height: 40px;
$base-padding: 15px;
$base-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
$base-font-color: #606266;
$base-left-menu-width: 220px;
$base-right-content-width: calc(100vw - 220px);
$base-left-menu-width-min: 65px;
$base-right-content-width-min: calc(100vw - 65px);
/* byui scss全局变量结束 */
:export {
  menuText: $base-menu-text;
  menuTextAcive: $base-menu-text-active;
  menuBackground: $base-menu-background;
  menuActiveBackground: $base-menu-active-background;
  tagViewsActiveBackground: $base-color-blue;
  buttonBackground: $base-color-blue;
  paginationActiveBackground: $base-color-blue;
}
```

## 环境变量配置

```
.env.development    # 在开发环境中被载入
.env.production     # 在生成环境中被载入
```

# 和服务端进行交互

## 前端请求示例

```js
import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/table/list",
    method: "post",
    data,
  });
}
```

## 前端请求约定

请求中会自动传 accessToken，用于后端接收，accessToken 的字段名可以在 setting.js 中配置

```
/*表格中请求参数约定*/
{
    "pageNo": 1, //页数
    "pageSize": 10 //每页条数
}
```

## 后端返回 JSON 数据的约定（路由接口除外）

```
{
    "code": 200,//成功的状态码
    "msg": "success",//提示信息
    "totalCount": 238,//总条数（表格中用到）
    "data": [{}，{}，{}]//返回数据
}
```

# 开发（必看）

## 新增 router

这个不用多说了吧，建完了 view 必须在配置路由才能访问，后端配置参照 mock 文件夹下的 router.js,前端配置在 router 文件夹下的 index.js

## 创建 view

不用自己建，已为您提供了模板

```bash
cnpm run template
#选择创建view，填入名称会自动为您创建
```

## 创建 api 与 mock

不用自己建，已为您提供了模板

```bash
cnpm run template
#选择创建mock，填入名称会自动为您创建
```

## 新增组件

不用自己建，已为您提供了模板

```bash
cnpm run template
#选择创建components，填入名称会自动为您创建
```

## 新增 store

不用自己建，已为您提供了模板

```bash
cnpm run template
#选择创建vuex，填入名称会自动为您创建
```

## 更多文档

加群获取

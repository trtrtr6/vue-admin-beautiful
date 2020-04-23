import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: (resolve) => require(["@/views/login/index"], resolve),
    hidden: true,
  },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: (resolve) => require(["@/views/redirect/index"], resolve),
      },
    ],
  },
];

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: (resolve) => require(["@/views/index/index"], resolve),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
          noCache: true,
        },
      },
    ],
  },
  {
    path: "/test",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: (resolve) => require(["@/views/test/index"], resolve),
        meta: { title: "test", icon: "marker" },
      },
    ],
  },
  {
    path: "/permission",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "permission",
        name: "Permission",
        component: (resolve) =>
          require(["@/views/byui/permission/index"], resolve),
        meta: { title: "权限控制", icon: "user-shield" },
      },
    ],
  },
  {
    path: "/byui",
    component: Layout,
    redirect: "noRedirect",
    name: "Byui",
    meta: { title: "组件库", icon: "cloud", roles: ["admin"] },
    children: [
      {
        path: "codeGenerator",
        name: "CodeGenerator",
        component: (resolve) =>
          require(["@/views/byui/codeGenerator/index"], resolve),
        meta: { title: "代码生成机" },
      },
      {
        path: "markdown",
        name: "Markdown",
        component: (resolve) =>
          require(["@/views/byui/markdown/index"], resolve),
        meta: { title: "markdown阅读器" },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: (resolve) =>
          require(["@/views/byui/smallComponents/index"], resolve),
        meta: { title: "小组件" },
      },
      {
        path: "icon",
        name: "Icon",
        component: (resolve) => require(["@/views/byui/icon/index"], resolve),
        meta: { title: "常规图标" },
      },
      {
        path: "colorfulIcon",
        name: "ColorfulIcon",
        component: (resolve) =>
          require(["@/views/byui/icon/colorfulIcon"], resolve),
        meta: { title: "多彩图标" },
      },
      {
        path: "remixicon",
        name: "Remixicon",
        component: (resolve) =>
          require(["@/views/byui/icon/remixicon"], resolve),
        meta: { title: "小清新图标" },
      },
      {
        path: "upload",
        name: "Upload",
        component: (resolve) => require(["@/views/byui/upload/index"], resolve),
        meta: { title: "上传" },
      },
      {
        path: "webUploader",
        name: "WebUploader",
        component: (resolve) =>
          require(["@/views/byui/webUploader/index"], resolve),
        meta: { title: "webUploader上传" },
      },
      {
        path: "sticky",
        name: "Sticky",
        component: (resolve) => require(["@/views/byui/sticky/index"], resolve),
        meta: { title: "sticky吸附" },
      },
      {
        path: "table",
        name: "Table",
        component: (resolve) => require(["@/views/byui/table/index"], resolve),
        meta: { title: "表格" },
      },
      {
        path: "form",
        name: "Form",
        component: (resolve) => require(["@/views/byui/form/index"], resolve),
        meta: { title: "表单" },
      },
      {
        path: "tree",
        name: "Tree",
        component: (resolve) => require(["@/views/byui/tree/index"], resolve),
        meta: { title: "树" },
      },
      {
        path: "card",
        name: "Card",
        component: (resolve) => require(["@/views/byui/card/index"], resolve),
        meta: { title: "卡片" },
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: (resolve) =>
          require(["@/views/byui/magnifier/index"], resolve),
        meta: { title: "放大镜" },
      },
      {
        path: "waterfall",
        name: "Waterfall",
        component: (resolve) =>
          require(["@/views/byui/waterfall/index"], resolve),
        meta: { title: "瀑布屏", noCache: true },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: (resolve) =>
          require(["@/views/byui/echarts/index"], resolve),
        meta: { title: "图表" },
      },

      {
        path: "loading",
        name: "Loading",
        component: (resolve) =>
          require(["@/views/byui/loading/index"], resolve),
        meta: { title: "loading" },
      },
      {
        path: "player",
        name: "Player",
        component: (resolve) => require(["@/views/byui/player/index"], resolve),
        meta: { title: "视频播放器", noCache: true },
      },
      {
        path: "editor",
        name: "Editor",
        component: (resolve) => require(["@/views/byui/editor/index"], resolve),
        meta: { title: "富文本编辑器" },
      },
      {
        path: "qrCode",
        name: "QrCode",
        component: (resolve) => require(["@/views/byui/qrCode/index"], resolve),
        meta: { title: "二维码" },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: (resolve) =>
          require(["@/views/byui/backToTop/index"], resolve),
        meta: { title: "返回顶部" },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: (resolve) => require(["@/views/byui/lodash/index"], resolve),
        meta: { title: "lodash" },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: (resolve) =>
          require(["@/views/byui/imgComparison/index"], resolve),
        meta: { title: "图像拖拽比对" },
      },
      {
        path: "log",
        name: "Log",
        component: (resolve) =>
          require(["@/views/byui/errorLog/index"], resolve),
        meta: { title: "错误日志模拟" },
      },
      {
        path: "more",
        name: "More",
        component: (resolve) => require(["@/views/byui/more/index"], resolve),
        meta: { title: "更多组件" },
      },
      {
        path: "news",
        name: "News",
        component: (resolve) => require(["@/views/byui/news/index"], resolve),
        meta: { title: "新闻（可能存在跨域）" },
      },
    ],
  },
  {
    path: "/401",
    component: (resolve) => require(["@/views/401"], resolve),
    meta: { title: "401错误页演示", icon: "bug" },
  },
  {
    path: "/404",
    component: (resolve) => require(["@/views/404"], resolve),
    meta: { title: "404错误页演示", icon: "bug" },
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});

export default router;

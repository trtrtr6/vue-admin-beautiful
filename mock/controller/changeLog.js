const data = [
  {
    content: "在github上公布源码",
    timestamp: "2020-03-07",
  },
  {
    content: "上架DCloud插件市场",
    timestamp: "2018-03-09",
  },
  {
    content: "大幅优化手机端展示效果",
    timestamp: "2020-03-20",
  },
  {
    content: "增加更换主题功能",
    timestamp: "2020-04-10",
  },
  {
    content: "大幅精简代码",
    timestamp: "2020-04-14",
  },
  {
    content: "修复群友反馈的bug",
    timestamp: "2020-04-16",
  },
  {
    content: "剔除maptalks",
    timestamp: "2020-04-17",
  },
  {
    content:
      "换行符统一修改为lf 支持苹果 linux windows协同开发 强制开启最严格eslint规则 不要哭 严格是有好处的",
    timestamp: "2020-04-17",
  },
  {
    content: "彻底完成手机端适配,记录这一天熬夜到了晚上三点",
    timestamp: "2020-04-18",
  },
  {
    content:
      "删除babel-polyfill 提高打包速度 减少压缩体积（放弃ie是这个项目做出的最伟大的决定）",
    timestamp: "2020-04-18",
  },
  {
    content: "源码精简至800k",
    timestamp: "2020-04-19",
  },
  {
    content: "添加视频播放器组件",
    timestamp: "2020-04-20",
  },
  {
    content: "修复路由懒加载 完善主题配色",
    timestamp: "2020-04-22",
  },
];

export default [
  {
    url: "/changeLog/getList",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "success",
        totalCount: 999,
        data: data,
      };
    },
  },
];

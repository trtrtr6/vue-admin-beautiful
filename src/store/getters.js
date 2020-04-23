const getters = {
  device: (state) => state.app.device,
  accessToken: (state) => state.user.accessToken,
  avatar: (state) => state.user.avatar,
  collapse: (state) => state.settings.collapse,
  cachedViews: (state) => state.tagsView.cachedViews,
  errorLogs: (state) => state.errorLog.logs,
  header: (state) => state.settings.header,
  lastLoginTime: (state) => state.user.lastLoginTime,
  layout: (state) => state.settings.layout,
  logo: (state) => state.settings.logo,
  loginTimes: (state) => state.user.loginTimes,
  name: (state) => state.user.name,
  roles: (state) => state.user.roles,
  routes: (state) => state.permission.routes,
  selectedTag: (state) => state.tagsView.selectedTag,
  srcTableCode: (state) => state.table.srcCode,
  tagsView: (state) => state.settings.tagsView,
  visitedViews: (state) => state.tagsView.visitedViews,
};
export default getters;

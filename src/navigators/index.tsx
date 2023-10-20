export { RootNavigator } from './root';

// 定义全局的路由及其参数的键值对
declare global {
  // 路由 ==> 路由参数
  type RouteParamList = {
    login: undefined;
    forget_password: undefined;
    home: undefined;
    home_tab1: undefined;
    home_tab2: undefined;
    home_tab3: undefined;
    page1: { id: string };
    page2?: { userId: string };
  };

  namespace ReactNavigation {
    interface RootParamList extends RouteParamList {}
  }
}

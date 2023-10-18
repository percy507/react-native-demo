export { RootNavigator } from './root';

// 定义全局的路由及其参数的键值对
declare global {
  namespace ReactNavigation {
    // 路由 ==> 路由参数
    interface RootParamList {
      home: undefined;
      home_tab1: undefined;
      home_tab2: undefined;
      home_tab3: undefined;
      page1: { id: string };
      page2?: { userId: string };
      [key: string]: any;
    }
  }
}

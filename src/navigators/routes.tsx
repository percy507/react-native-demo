import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { IconFont } from '@/components';
import { ForgetPasswordScreen } from '@/screens/auth/forget-password';
import { LoginScreen } from '@/screens/auth/login';
import { DemoIconScreen } from '@/screens/demo/icon';
import { DemoLottieScreen } from '@/screens/demo/lottie';
import {
  DemoWebviewLoadHtmlScreen,
  DemoWebviewLoadUriScreen,
} from '@/screens/demo/webview';
import { Tab1Screen } from '@/screens/home/tab1';
import { Tab2Screen } from '@/screens/home/tab2';
import { Tab3Screen } from '@/screens/home/tab3';
import { Page1Screen } from '@/screens/page1';
import { Page2Screen } from '@/screens/page2';

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

    demo_icon: undefined;
    demo_webview_uri: undefined;
    demo_webview_html: undefined;
    demo_lottie: undefined;
  };

  namespace ReactNavigation {
    interface RootParamList extends RouteParamList {}
  }
}

export const RootRoutes: [keyof RouteParamList, React.ComponentType][] = [
  ['login', LoginScreen],
  ['forget_password', ForgetPasswordScreen],
  ['demo_icon', DemoIconScreen],
  ['demo_webview_uri', DemoWebviewLoadUriScreen],
  ['demo_webview_html', DemoWebviewLoadHtmlScreen],
  ['demo_lottie', DemoLottieScreen],
  ['page1', Page1Screen],
  ['page2', Page2Screen],
];

export const BottomTabs: {
  name: keyof RouteParamList;
  component: React.ComponentType;
  options: BottomTabNavigationOptions;
}[] = [
  {
    name: 'home_tab1',
    component: Tab1Screen,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <IconFont name="icon-home" color={color} size={size} />
      ),
    },
  },
  {
    name: 'home_tab2',
    component: Tab2Screen,
    options: {
      tabBarLabel: '联系人',
      tabBarIcon: ({ color, size }) => (
        <IconFont name="icon-contact" color={color} size={size} />
      ),
    },
  },
  {
    name: 'home_tab3',
    component: Tab3Screen,
    options: {
      title: '我的哈哈哈哈哈哈',
      tabBarLabel: '我的哈哈哈哈哈哈',
      tabBarBadge: 999,
      tabBarIcon: ({ color, size }) => (
        <IconFont name="icon-wode" color={color} size={size} />
      ),
    },
  },
];

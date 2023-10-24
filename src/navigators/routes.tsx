import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { IconFont } from '@/components';
import { ForgetPasswordScreen } from '@/screens/auth/forget-password';
import { LoginScreen } from '@/screens/auth/login';
import { DemoHttpScreen } from '@/screens/demo/http';
import { DemoIconScreen } from '@/screens/demo/icon';
import { DemoLottieScreen } from '@/screens/demo/lottie';
import { DemoNavbarScreen } from '@/screens/demo/navbar';
import { DemoNavigationScreen } from '@/screens/demo/navigation';
import { DemoScreenAdaptation } from '@/screens/demo/screen_adaptation';
import { DemoToastScreen } from '@/screens/demo/toast';
import {
  DemoWebviewLoadHtmlScreen,
  DemoWebviewLoadUriScreen,
} from '@/screens/demo/webview';
import { Tab1Screen } from '@/screens/home/tab1';
import { Tab2Screen } from '@/screens/home/tab2';
import { Tab3Screen } from '@/screens/home/tab3';

// 定义全局的路由及其参数的键值对
declare global {
  // 路由 ==> 路由参数
  type RouteParamList = {
    home: undefined;
    home_tab1: undefined;
    home_tab2: undefined;
    home_tab3: undefined;

    login: undefined;
    forget_password: undefined;

    demo_navigation: { id: string };
    demo_navbar: undefined;
    demo_screen_adaptation: undefined;
    demo_icon: undefined;
    demo_webview_uri: undefined;
    demo_webview_html: undefined;
    demo_lottie: undefined;
    demo_toast: undefined;
    demo_http: undefined;
  };

  namespace ReactNavigation {
    interface RootParamList extends RouteParamList {}
  }
}

export const RootRoutes: [keyof RouteParamList, React.ComponentType][] = [
  ['login', LoginScreen],
  ['forget_password', ForgetPasswordScreen],

  ['demo_navigation', DemoNavigationScreen],
  ['demo_navbar', DemoNavbarScreen],
  ['demo_screen_adaptation', DemoScreenAdaptation],
  ['demo_icon', DemoIconScreen],
  ['demo_webview_uri', DemoWebviewLoadUriScreen],
  ['demo_webview_html', DemoWebviewLoadHtmlScreen],
  ['demo_lottie', DemoLottieScreen],
  ['demo_toast', DemoToastScreen],
  ['demo_http', DemoHttpScreen],
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
      tabBarIcon: ({ color, size, focused }) => (
        <IconFont
          name={focused ? 'icon-home-smile-fill' : 'icon-home-smile-line'}
          color={color}
          size={size}
        />
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
      tabBarLabel: '我的哈哈哈哈哈哈',
      tabBarIcon: ({ color, size }) => (
        <IconFont name="icon-wode" color={color} size={size} />
      ),
    },
  },
];

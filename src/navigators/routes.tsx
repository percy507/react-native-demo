import type {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';

import { IconFont } from '@/components';
import { ForgetPasswordScreen } from '@/screens/auth/forget-password';
import { LoginScreen } from '@/screens/auth/login';
import { PrivacyPolicyScreen, UserProtocolScreen } from '@/screens/auth/protocols';
import { DemoExceptionScreen } from '@/screens/demo/exception';
import { DemoHttpScreen } from '@/screens/demo/http';
import { DemoLottieScreen } from '@/screens/demo/lottie';
import { DemoMMKVScreen } from '@/screens/demo/mmkv';
import { DemoNavbarScreen } from '@/screens/demo/navbar';
import { DemoNavigationScreen } from '@/screens/demo/navigation';
import { DemoOpenExternalScreen } from '@/screens/demo/open_external';
import { DemoScreenAdaptation } from '@/screens/demo/screen_adaptation';
import { DemoTestComponentsScreen } from '@/screens/demo/test_components';
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
    user_protocol: undefined;
    privacy_policy: undefined;

    demo_test_components: undefined;
    demo_navigation: { id: string };
    demo_navbar: undefined;
    demo_screen_adaptation: undefined;
    demo_webview_uri: undefined;
    demo_webview_html: undefined;
    demo_lottie: undefined;
    demo_toast: undefined;
    demo_http: undefined;
    demo_mmkv: undefined;
    demo_exception: undefined;
    demo_open_external: undefined;
  };

  namespace ReactNavigation {
    interface RootParamList extends RouteParamList {}
  }
}

export const RootRoutes: [keyof RouteParamList, React.ComponentType][] = [
  ['login', LoginScreen],
  ['forget_password', ForgetPasswordScreen],
  ['user_protocol', UserProtocolScreen],
  ['privacy_policy', PrivacyPolicyScreen],

  ['demo_test_components', DemoTestComponentsScreen],
  ['demo_navigation', DemoNavigationScreen],
  ['demo_navbar', DemoNavbarScreen],
  ['demo_screen_adaptation', DemoScreenAdaptation],
  ['demo_webview_uri', DemoWebviewLoadUriScreen],
  ['demo_webview_html', DemoWebviewLoadHtmlScreen],
  ['demo_lottie', DemoLottieScreen],
  ['demo_toast', DemoToastScreen],
  ['demo_http', DemoHttpScreen],
  ['demo_mmkv', DemoMMKVScreen],
  ['demo_exception', DemoExceptionScreen],
  ['demo_open_external', DemoOpenExternalScreen],
];

export type BottomTabNav = BottomTabNavigationProp<RouteParamList>;
export type StackNav = StackNavigationProp<RouteParamList>;

const IconSize = 24;

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
      tabBarIcon: ({ color, focused }) => {
        const icon = focused ? 'icon-home-smile-fill' : 'icon-home-smile-line';
        return <IconFont name={icon} color={color} size={IconSize} />;
      },
    },
  },
  {
    name: 'home_tab2',
    component: Tab2Screen,
    options: {
      tabBarLabel: '联系人',
      tabBarIcon: ({ color }) => (
        <IconFont name="icon-contact" color={color} size={IconSize} />
      ),
    },
  },
  {
    name: 'home_tab3',
    component: Tab3Screen,
    options: {
      tabBarLabel: '我的哈哈哈哈哈哈',
      tabBarIcon: ({ color }) => (
        <IconFont name="icon-wode" color={color} size={IconSize} />
      ),
    },
  },
];

import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import type { WebViewNavigation } from 'react-native-webview';
import { WebView } from 'react-native-webview';

import { ScreenWrapper } from '@/components';
import { getConfig } from '@/config';
import type { StackNav } from '@/navigators/routes';
import { getTokenScript } from '@/stores/user';
import { openExternalLink } from '@/utils';
import { redirectToLogin } from '@/utils/request';

import { h5_pages } from './config';

export function H5WebviewScreen({ navbar, params }: { navbar?: any; params?: any }) {
  const nav = useNavigation<StackNav>();
  const route = useRoute();
  const routeParams = params || (route.params as { title: string; url: string });

  const [webviewNavState, setWebviewNavState] = useState<WebViewNavigation>();
  const webviewNavStateRef = useRef(webviewNavState);
  webviewNavStateRef.current = webviewNavState;
  const webviewRef = useRef<WebView>(null);

  useEffect(() => {
    // 如果webview的当前路由不是其路由栈中的最后一个，则不返回到上一个 screen
    // 且返回手势或点击返回按钮会触发webview页面的返回操作
    nav.addListener('beforeRemove', (e) => {
      if (!webviewNavStateRef.current?.canGoBack) {
        return nav.dispatch(e.data.action);
      }
      e.preventDefault();
      webviewRef.current?.goBack();
    });
  }, [nav]);

  const [title, setTitle] = useState('');

  const onMessage = (event) => {
    const data = JSON.parse(event.nativeEvent.data) as { type: string; payload: any };

    switch (data.type) {
      // h5页面里，token过期，需要通知app重定向回登录页
      case 'redirect_to_login':
        redirectToLogin();
        break;
      case 'set_title': {
        setTitle(data.payload);
        break;
      }
      case 'call_up': {
        openExternalLink(`tel:${data.payload}`);
        break;
      }
      case 'open_webview': {
        let { pageType, pageParams } = data.payload;
        if (!h5_pages[pageType]) return;
        nav.navigate('h5_webview', h5_pages[pageType](pageParams));
        break;
      }
      default:
        return;
    }
  };

  const url = routeParams.url.startsWith('http')
    ? routeParams.url
    : `${getConfig().BASE_API}${routeParams.url}`;

  return (
    <ScreenWrapper navbar={{ ...navbar, title: title || routeParams.title }}>
      <WebView
        ref={webviewRef}
        source={{ uri: url }}
        injectedJavaScriptBeforeContentLoaded={getTokenScript()}
        setSupportMultipleWindows={false} // 防止webview中的链接跳转至外部浏览器
        onNavigationStateChange={(event) => setWebviewNavState(event)}
        onMessage={onMessage}
      />
    </ScreenWrapper>
  );
}

// 用于h5页面

// interface Window {
//   ReactNativeWebView: any;
// }

// type DataValue =
//   | { type: 'redirect_to_login' } // 通知app重定向回登录页
//   | { type: 'set_title'; payload: string } // 设置页面顶部标题
//   | { type: 'call_up'; payload: string } // 打电话，唤起手机拨号
//   | { type: 'open_webview'; payload: { pageType: 'user_info'; pageParams: any } }; // h5中打开新的webview页面

// /** 向app的webview传递消息 */
// export function postMessage2Webview(data: DataValue) {
//   window.ReactNativeWebView?.postMessage(JSON.stringify(data));
// }

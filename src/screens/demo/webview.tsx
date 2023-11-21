import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import type { WebViewNavigation } from 'react-native-webview';
import { WebView } from 'react-native-webview';

import { Button, ScreenWrapper, Text, View } from '@/components';
import type { StackNav } from '@/navigators/routes';

import html from './webview_temp.html';

export function DemoWebviewLoadUriScreen() {
  const nav = useNavigation<StackNav>();
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

  const onNavigationStateChange = (event: WebViewNavigation) => {
    setWebviewNavState(event);

    console.log('onNavigationStateChange', event);

    const webview = webviewRef.current;
    const { url } = event;
    if (!webview || !url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // redirect somewhere else
    if (url.includes('html-tutorial.html')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      webview.injectJavaScript(redirectTo);
    }
  };
  return (
    <ScreenWrapper navbar={{ title: '菜鸟教程（0_0）' }}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://www.runoob.com/' }}
        setSupportMultipleWindows={false} // 防止webview中的链接跳转至外部浏览器
        onNavigationStateChange={onNavigationStateChange}
      />
    </ScreenWrapper>
  );
}

export function DemoWebviewLoadHtmlScreen() {
  const webviewRef = useRef<WebView>(null);
  const [h5Data, setH5Data] = useState<string>('');

  const script1 = `window.__RN_111 = "11__${Math.random().toString(16).slice(4, 9)}"`;
  const script2 = `window.__RN_222 = "22__${Math.random().toString(16).slice(4, 9)}"`;

  return (
    <ScreenWrapper navbar={{ title: '渲染静态html' }}>
      <WebView
        ref={webviewRef}
        style={{ height: '70%' }}
        source={{ html }}
        injectedJavaScriptBeforeContentLoaded={script1}
        injectedJavaScript={script2}
        cacheEnabled={false}
        onMessage={(e) => {
          console.log('收到的h5数据', e.nativeEvent.data);
          setH5Data(e.nativeEvent.data);
        }}
      />
      <View
        style={{ height: '30%', padding: 20, borderTopColor: 'red', borderTopWidth: 2 }}>
        <Button
          label="向h5传递数据"
          size="small"
          onPress={() => {
            const str = `rn_${Math.random().toString(16).slice(4, 9)}`;
            console.log('向h5传递数据 ==>', str);
            webviewRef.current?.postMessage(str);
          }}
        />
        <Text style={{ marginTop: 20 }}>收到的h5数据: {h5Data}</Text>
      </View>
    </ScreenWrapper>
  );
}

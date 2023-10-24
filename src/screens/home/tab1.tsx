import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Button, ScreenWrapper } from '@/components';

import { PageInfo } from '../part';

export function Tab1Screen() {
  const nav = useNavigation();

  const list: [label: string, route: keyof RouteParamList, params?: object][] = [
    ['测试 navigation (路由跳转)', 'demo_navigation', { id: '1122😎' }],
    ['测试 navbar (导航栏)', 'demo_navbar'],
    ['测试 屏幕适配', 'demo_screen_adaptation'],
    ['测试 iconfont', 'demo_icon'],
    ['测试 webview (加载url)', 'demo_webview_uri'],
    ['测试 webview (加载html字符串)', 'demo_webview_html'],
    ['测试 lottie 动画', 'demo_lottie'],
    ['测试 toast', 'demo_toast'],
    ['测试 http', 'demo_http'],
  ];

  return (
    <ScreenWrapper navbar={{ title: '首页', showBack: false }}>
      <View style={styles.root}>
        <PageInfo title="Tab1Screen" />
        <ScrollView>
          <View style={styles.list}>
            {list.map((el) => (
              <Button
                key={el[0]}
                title={el[0]}
                // @ts-ignore
                onPress={() => nav.navigate(el[1], el[2])}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

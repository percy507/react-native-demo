import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { ScreenWrapper } from '@/components';

import { PageInfo } from '../part';

export function Tab1Screen() {
  const nav = useNavigation();

  const list: [label: string, route: keyof RouteParamList, params?: object][] = [
    ['测试 navigation (路由跳转)', 'demo_navigation', { id: '1122😎' }],
    ['测试 navbar (导航栏)', 'demo_navbar'],
    ['测试屏幕适配', 'demo_screen_adaptation'],
    ['测试 iconfont', 'demo_icon'],
    ['测试 webview (加载url)', 'demo_webview_uri'],
    ['测试 webview (加载html字符串)', 'demo_webview_html'],
    ['测试 lottie 动画', 'demo_lottie'],
    ['测试 toast', 'demo_toast'],
    ['测试 http', 'demo_http'],
    ['测试键值对数据本地存储(mmkv)', 'demo_mmkv'],
  ];

  return (
    <ScreenWrapper navbar={{ title: '首页', showBack: false }}>
      <View style={styles.root}>
        <PageInfo title="Tab1Screen" />

        <View style={styles.list}>
          {list.map((el) => (
            <Button
              size="small"
              key={el[0]}
              label={el[0]}
              // @ts-ignore
              onPress={() => nav.navigate(el[1], el[2])}
            />
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

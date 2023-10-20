import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Button, ScreenWrapper } from '@/components';

import { PageInfo } from '../part';

export function Tab1Screen() {
  const nav = useNavigation();

  return (
    <ScreenWrapper navbar={{ title: '首页', showBack: false }}>
      <View style={styles.root}>
        <PageInfo title="HomeScreen" />
        <ScrollView>
          <View style={styles.list}>
            <Button
              title="测试路由跳转"
              onPress={() => nav.navigate('demo_navigation', { id: '1122😎' })}
            />
            <Button title="测试 iconfont" onPress={() => nav.navigate('demo_icon')} />
            <Button
              title="测试 webview (加载url)"
              onPress={() => nav.navigate('demo_webview_uri')}
            />
            <Button
              title="测试 webview (加载html字符串)"
              onPress={() => nav.navigate('demo_webview_html')}
            />
            <Button
              title="测试 lottie 动画"
              onPress={() => nav.navigate('demo_lottie')}
            />
            <Button title="测试 toast" onPress={() => nav.navigate('demo_toast')} />
            <Button title="测试 http" onPress={() => nav.navigate('demo_http')} />
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

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

            <Button title="前往首页Tab2" onPress={() => nav.navigate('home_tab2')} />
            <Button
              title="前往页面1"
              onPress={() => nav.navigate('page1', { id: 'from_home' })}
            />
            <Button title="前往页面2" onPress={() => nav.navigate('page2')} />
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

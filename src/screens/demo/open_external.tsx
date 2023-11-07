import * as Linking from 'expo-linking';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { ScreenWrapper } from '@/components';
import { openExternalLink } from '@/utils';

export function DemoOpenExternalScreen() {
  return (
    <ScreenWrapper contentStyle={styles.root} navbar={{ title: '测试打开外部链接' }}>
      <View style={styles.list}>
        <Button
          size="small"
          label="打开http链接"
          onPress={() => openExternalLink('http://sohu.com')}
        />
        <Button
          size="small"
          label="打开https链接"
          onPress={() => openExternalLink('https://github.com')}
        />
        <Button
          size="small"
          label="打开tel链接"
          onPress={() => openExternalLink('tel:+123456789')}
        />
        <Button
          size="small"
          label="打开mailto链接"
          onPress={() => openExternalLink('mailto:support@expo.io')}
        />
        <Button
          size="small"
          label="打开taobao链接"
          onPress={() =>
            openExternalLink('taobao://item.taobao.com/item.htm?id=713003439587')
          }
        />
        <Button
          size="small"
          label="打开app系统设置"
          onPress={() => Linking.openSettings()}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

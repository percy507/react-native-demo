import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import type { ScreenWrapperProps } from '@/components';
import { Button, ScreenWrapper, Text, View } from '@/components';

export function DemoNavbarScreen() {
  const nav = useNavigation();
  const [navbarProps, setNavbarProps] = useState<ScreenWrapperProps['navbar']>();

  return (
    <ScreenWrapper contentStyle={styles.root} navbar={navbarProps}>
      <View style={styles.list}>
        <Button
          size="small"
          label="显示/隐藏 navbar"
          onPress={() => setNavbarProps({ show: !navbarProps?.show })}
        />
        <Button
          size="small"
          label="设置标题"
          onPress={() => setNavbarProps({ title: `标题${Date.now()}` })}
        />
        <Button
          size="small"
          label="自定义背景色/字体颜色"
          onPress={() => setNavbarProps({ color: '#fff', bgColor: '#f89d13' })}
        />
        <Button
          size="small"
          label="Toggle leftNode"
          onPress={() =>
            setNavbarProps({
              leftNode: navbarProps?.leftNode ? undefined : (
                <Text onPress={() => nav.goBack()}>⬅️</Text>
              ),
            })
          }
        />
        <Button
          size="small"
          label="Toggle rightNode"
          onPress={() =>
            setNavbarProps({
              rightNode: navbarProps?.rightNode ? undefined : (
                <Button
                  size="small"
                  label="点我"
                  onPress={() => alert('This is a button!')}
                />
              ),
            })
          }
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

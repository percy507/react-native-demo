import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { ScreenWrapperProps } from '@/components';
import { Button, ScreenWrapper } from '@/components';

export function DemoNavbarScreen() {
  const nav = useNavigation();
  const [navbarProps, setNavbarProps] = useState<ScreenWrapperProps['navbar']>();

  return (
    <ScreenWrapper contentStyle={styles.root} navbar={navbarProps}>
      <View style={styles.list}>
        <Button
          title="显示/隐藏 navbar"
          onPress={() => setNavbarProps({ show: !navbarProps?.show })}
        />
        <Button
          title="设置标题"
          onPress={() => setNavbarProps({ title: `标题${Date.now()}` })}
        />
        <Button
          title="自定义背景色/字体颜色"
          onPress={() => setNavbarProps({ color: '#fff', bgColor: '#f89d13' })}
        />
        <Button
          title="Toggle leftNode"
          onPress={() =>
            setNavbarProps({
              leftNode: navbarProps?.leftNode ? undefined : (
                <Text onPress={() => nav.goBack()}>⬅️</Text>
              ),
            })
          }
        />
        <Button
          title="Toggle rightNode"
          onPress={() =>
            setNavbarProps({
              rightNode: navbarProps?.rightNode ? undefined : (
                <Button onPress={() => alert('This is a button!')} title="Info" />
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

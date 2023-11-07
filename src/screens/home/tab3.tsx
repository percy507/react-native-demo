import { CommonActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { AModal, EnvSwitcher, IconFont, ScreenWrapper } from '@/components';
import { storage } from '@/hooks';
import type { BottomTabNav, StackNav } from '@/navigators/routes';
import { requestLogout } from '@/services/auth';

import { PageInfo } from '../part';

export function Tab3Screen() {
  const nav = useNavigation<BottomTabNav>();

  const labels = ['笑里刀', '劐劐', '鬼魅', '我可是超级长的哦', '🤣🥳👻', 'Mr. V'];
  const iconNames = [
    'icon-wode',
    'icon-checkbox-circle-line',
    'icon-hashiqi',
    'icon-pdf',
  ] as const;

  return (
    <ScreenWrapper navbar={{ show: false }}>
      <View style={styles.root}>
        <PageInfo title="Tab3Screen" />

        <View style={styles.list}>
          <Button
            size="small"
            label="修改底部标题 & Icon"
            onPress={() => {
              const label = labels[Math.floor(Math.random() * labels.length)];
              const name = iconNames[Math.floor(Math.random() * iconNames.length)];
              nav.setOptions({
                tabBarLabel: label,
                tabBarIcon: ({ color, size }) => (
                  <IconFont name={name} color={color} size={size} />
                ),
              });
            }}
          />
          <Button
            size="small"
            label="修改底部badge"
            onPress={() =>
              nav.setOptions({ tabBarBadge: Math.ceil(Math.random() * 200) })
            }
          />
          <Button
            size="small"
            label="修改label位置 (beside-icon)"
            onPress={() => nav.setOptions({ tabBarLabelPosition: 'beside-icon' })}
          />
          <Button
            size="small"
            label="修改label位置 (below-icon)"
            onPress={() => nav.setOptions({ tabBarLabelPosition: 'below-icon' })}
          />
        </View>

        <View style={{ marginTop: 60 }}>
          <LogoutButton />
        </View>

        <View style={{ marginTop: 60 }}>
          <EnvSwitcher />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

function LogoutButton() {
  const nav = useNavigation<StackNav>();
  const [visible, setVisible] = useState(false);

  const logout = () => {
    setVisible(false);
    requestLogout();
    storage.clearAll();
    setTimeout(() => {
      // 退出登录时，需要清除历史路由栈，否则在登录页，利用手势返回时，可以返回到上一页
      nav.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'login' }] }));
    }, 200);
  };

  return (
    <>
      <AModal
        visible={visible}
        setVisible={setVisible}
        title="确认退出登录？"
        description="退出登录将清除本地所有的session数据。"
        onOk={logout}
      />
      <Button label="退出登录" onPress={() => setVisible(true)} />
    </>
  );
}

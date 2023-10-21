import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import { Button, IconFont, ScreenWrapper } from '@/components';

import { PageInfo } from '../part';

export function Tab3Screen() {
  const nav = useNavigation<BottomTabNavigationProp<RouteParamList>>();

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
            title="修改底部标题 & Icon"
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
            title="修改底部badge"
            onPress={() =>
              nav.setOptions({ tabBarBadge: Math.ceil(Math.random() * 200) })
            }
          />
          <Button
            title="修改label位置 (beside-icon)"
            onPress={() => nav.setOptions({ tabBarLabelPosition: 'beside-icon' })}
          />
          <Button
            title="修改label位置 (below-icon)"
            onPress={() => nav.setOptions({ tabBarLabelPosition: 'below-icon' })}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

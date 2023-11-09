import { StyleSheet } from 'react-native';

import { IconFont, ScreenWrapper, Text, View } from '@/components';

export function DemoIconScreen() {
  return (
    <ScreenWrapper contentStyle={styles.root} navbar={{ title: '使用 IconFont' }}>
      <View>
        <Text>
          <Text>自定义图标: </Text>
          <IconFont name="icon-pdf" size={32} />
          <IconFont name="icon-yasuo" size={32} />
          <IconFont name="icon-tupian" size={32} />
          <IconFont name="icon-wode" size={32} />
        </Text>
      </View>
      <View style={styles.single}>
        <IconFont name="icon-hashiqi" size={120} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 12,
  },
  single: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

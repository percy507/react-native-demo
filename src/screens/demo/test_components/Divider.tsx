import { StyleSheet, View } from 'react-native';

import { Divider, Text } from '@/components';

export default function Demo() {
  return (
    <View style={styles.root}>
      <Text>我是一段文本！我是一段文本！</Text>
      <Divider />
      <View style={{ flexDirection: 'row' }}>
        <Text>我是</Text>
        <Divider axis="vertical" />
        <Text>一段</Text>
        <Divider axis="vertical" type="dashed" />
        <Text>文本</Text>
      </View>
      <Divider text="两岸猿声啼不住，轻舟已过万重山。" />
      <Divider text="文本xxx" />
      <Divider text="文本xxx" textAlign="right" color="red" />
      <Text>我是一段文本！我是一段文本！</Text>
      <Divider type="dashed" color="red" dashThickness={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 20, gap: 10 },
});

import { StyleSheet, View } from 'react-native';

import { Text } from '@/components';

export default function Demo() {
  return (
    <View style={styles.root}>
      <Text>我是一段文本</Text>
      <Text numberOfLines={1} ellipsizeMode="middle">
        [单行，中间省略]
        以铜为镜，可以正衣冠；以古为镜，可以知兴替；以人为镜，可以明得失。
      </Text>
      <Text numberOfLines={3}>
        [三行省略]
        我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本我是一段文本
      </Text>
      <Text type="formError">[表单错误提示样式] 请输入有效的手机号</Text>
      <Text style={{ backgroundColor: '#f6f6f6' }}>
        [换行符] 我是一段文本{'\n'}欲加之罪，何患无辞
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 20, gap: 10 },
});

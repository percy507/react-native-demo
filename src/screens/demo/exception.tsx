import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button, ScreenWrapper, Text, View } from '@/components';

export function DemoExceptionScreen() {
  const [obj, setObj] = useState<any>({});

  return (
    <ScreenWrapper contentStyle={styles.root} navbar={{ title: '测试异常捕获' }}>
      <View>
        <Text>报错信息请看终端输出或日志文件</Text>
        <Text>{obj.a}</Text>
      </View>

      <View style={styles.list}>
        <Button size="small" label="测试ErrorBoundary" onPress={() => setObj(null)} />
        <Button
          size="small"
          label="测试普通的js错误"
          onPress={() => {
            throw new SyntaxError('normal js error111');
          }}
        />
        <Button
          size="small"
          label="测试未捕获的Promise错误"
          onPress={() => {
            Promise.reject(new TypeError('promise error'));
          }}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

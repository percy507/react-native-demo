import { StyleSheet, Text, View } from 'react-native';
import { Toast, useToast } from 'react-native-toast-notifications';
import { Button } from 'react-native-ui-lib';

import { IconFont, ScreenWrapper } from '@/components';

export function DemoToastScreen() {
  const toast = useToast();

  return (
    <ScreenWrapper contentStyle={styles.root} navbar={{ title: '使用 Toast' }}>
      <View style={styles.list}>
        <Button
          size="small"
          label="toast (hook)"
          onPress={() => {
            let id = toast.show(
              <View>
                <Text style={styles.customMsg}>Hello toast!</Text>
                <Button
                  size="small"
                  label="点我关闭toast"
                  onPress={() => toast.hide(id)}
                />
              </View>,
              { duration: 60000 },
            );
          }}
        />

        <Button
          size="small"
          label="toast (Toast.show)"
          onPress={() => Toast.show('Hello toast!')}
        />
        <Button
          size="small"
          label="toast (大量文字)"
          onPress={() =>
            Toast.show(
              '悲剧将人生的有价值的东西毁灭给人看，喜剧将那无价值的撕破给人看。悲剧将人生的有价值的东西毁灭给人看，喜剧将那无价值的撕破给人看。',
            )
          }
        />
        <Button
          size="small"
          label="toast (自定义icon)"
          onPress={() =>
            Toast.show('哈哈哈哈哈😂', {
              icon: <IconFont name="icon-wode" color="#fff" size={20} />,
            })
          }
        />
        <Button
          size="small"
          label="toast (success)"
          onPress={() => Toast.show('success message', { type: 'success' })}
        />
        <Button
          size="small"
          label="toast (warn)"
          onPress={() => Toast.show('warn message', { type: 'warning' })}
        />
        <Button
          size="small"
          label="toast (danger)"
          onPress={() => Toast.show('danger message', { type: 'danger' })}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 12,
  },
  list: { display: 'flex', gap: 6 },
  customMsg: {
    fontSize: 20,
    paddingBottom: 10,
    color: '#fff',
  },
});

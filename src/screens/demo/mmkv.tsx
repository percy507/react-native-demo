import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { ScreenWrapper } from '@/components';
import { useMMKV } from '@/hooks';

export function DemoMMKVScreen() {
  const [json, setJSON] = useMMKV<{ [key: string]: any }>('xx-json');

  return (
    <ScreenWrapper contentStyle={styles.root} navbar={{ title: '键值对存储' }}>
      <Text style={{ marginBottom: 24 }}>
        mmkv是微信团队开发的高效、轻量、易用的跨平台键值对存储库。{'\n'}
        默认情况下，本地数据以明文存储在各个应用的私有目录下。在安卓系统中，mmkv默认存储位置为
        `/data/data/[包名]/files/mmkv`。
      </Text>
      <View style={styles.list}>
        <View style={styles.block}>
          <Button
            size="small"
            label="写入json随机数据"
            onPress={() =>
              setJSON({
                name: Math.random().toString(16).slice(2, 6),
                time: Date.now(),
                nums: new Array(Math.floor(Math.random() * 5 + 1))
                  .fill(0)
                  .map(() => Math.ceil(Math.random() * 1000)),
                bool: Math.random() > 0.5,
              })
            }
          />
          <Text>{typeof json === 'object' ? JSON.stringify(json, null, 2) : json}</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
  block: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 5,
  },
});

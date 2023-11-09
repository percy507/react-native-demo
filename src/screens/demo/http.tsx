import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button, ScreenWrapper, Text, View } from '@/components';
import { request404, requestGetQuote } from '@/services/test';

export function DemoHttpScreen() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});

  const getData = useCallback(() => {
    setLoading(true);
    requestGetQuote()
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <ScreenWrapper
      contentStyle={styles.root}
      navbar={{ title: '发起 http 请求' }}
      loading={loading}>
      <View style={styles.btns}>
        <Button label="再次请求一句话" onPress={() => getData()} />
        <Button label="HTTP 404" onPress={() => request404()} />
      </View>
      <View style={styles.result}>
        <Text>{`${data?.creator}: ${data.vhan}`}</Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 12,
  },
  btns: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  result: { padding: 12, fontSize: 15 },
});

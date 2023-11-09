import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { RefreshControl, StyleSheet } from 'react-native';

import { Button, ScreenWrapper, Text, View } from '@/components';

export function Tab2Screen() {
  const nav = useNavigation();

  const [data, setData] = useState(new Date().toISOString());
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData(new Date().toISOString());
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScreenWrapper
      navbar={{ show: false }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.root}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, textAlign: 'center' }}>Tab2</Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ color: 'red' }}>
            上次渲染时间: {data}
            {'\n'}
          </Text>
          <Text>* 本页面已启用RefreshControl（即顶部下拉刷新）</Text>
        </View>

        <View style={styles.list}>
          <Button size="small" label="nav.goBack()" onPress={() => nav.goBack()} />
          <Button
            size="small"
            label="前往首页Tab1"
            onPress={() => nav.navigate('home_tab1')}
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

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { Button, ScreenWrapper } from '@/components';

import { PageInfo } from '../part';

export function DemoNavigationScreen() {
  const nav = useNavigation();

  return (
    <ScreenWrapper
      contentStyle={styles.root}
      navbar={{
        leftNode: <Text>🥹</Text>,
        rightNode: <Button onPress={() => alert('This is a button!')} title="Info" />,
      }}>
      <PageInfo title="Page1Screen" />

      <View style={styles.list}>
        <Button title="nav.goBack()" onPress={() => nav.goBack()} />
        <Button
          title="nav.setParams"
          subTitle="更新路由参数，会重新渲染页面"
          onPress={() => nav.setParams({ id: Math.random().toString(16).slice(4) })}
        />
        <Button title="前往首页(默认Tab)" onPress={() => nav.navigate('home')} />
        <Button title="前往首页Tab3" onPress={() => nav.navigate('home_tab3')} />
        <Button
          title="再次前往页面1，参数id变了(nav.navigate)"
          onPress={() => {
            nav.navigate('demo_navigation', { id: Math.random().toString(16).slice(4) });
          }}
        />
        <Button title="前往lottie页面" onPress={() => nav.navigate('demo_lottie')} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

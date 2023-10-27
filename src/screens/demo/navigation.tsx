import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { ScreenWrapper } from '@/components';

import { PageInfo } from '../part';

export function DemoNavigationScreen() {
  // const nav = useNavigation();
  const nav = useNavigation<StackNavigationProp<RouteParamList>>();

  return (
    <ScreenWrapper
      contentStyle={styles.root}
      navbar={{
        leftNode: <Text>🥹</Text>,
        rightNode: (
          <Button size="small" label="Info" onPress={() => alert('This is a button!')} />
        ),
      }}>
      <PageInfo title="DemoNavigationScreen" />

      <View style={styles.list}>
        <Button size="small" label="nav.goBack()" onPress={() => nav.goBack()} />
        <Button
          size="small"
          label="nav.replace('demo_toast')"
          onPress={() => nav.replace('demo_toast')}
        />

        <Button
          size="small"
          label={'nav.setParams (更新路由参数，会重新渲染页面)'}
          onPress={() => nav.setParams({ id: Math.random().toString(16).slice(4) })}
        />
        <Button
          size="small"
          label="再次前往 demo_navigation，且参数变了"
          onPress={() => {
            nav.navigate('demo_navigation', { id: Math.random().toString(16).slice(4) });
          }}
        />

        <Button
          size="small"
          label="前往首页(默认Tab)"
          onPress={() => nav.navigate('home')}
        />
        <Button
          size="small"
          label="前往首页Tab3"
          onPress={() => nav.navigate('home_tab3')}
        />
        <Button
          size="small"
          label="前往lottie页面"
          onPress={() => nav.navigate('demo_lottie')}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

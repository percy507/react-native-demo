import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import { Button } from '@/components';

const NewHeader = {
  headerLeft: () => <Text>🥹</Text>,
  headerRight: () => <Button onPress={() => alert('This is a button!')} title="Info" />,
};

export function Page1Screen() {
  const nav = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  console.log('route_page1', route);

  return (
    <View style={{ padding: 12 }}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>Page1Screen</Text>
        <Text>params: {JSON.stringify(route.params)}</Text>
      </View>
      <View style={{ display: 'flex', gap: 6 }}>
        <Button title="nav.goBack()" onPress={() => nav.goBack()} />
        <Button title="nav.popToTop()" onPress={() => nav.popToTop()} />
        <Button
          title="nav.setParams"
          subTitle="更新路由参数，会重新渲染页面"
          onPress={() => nav.setParams({ id: Math.random().toString(16).slice(4) })}
        />
        <Button
          title="nav.setOptions"
          subTitle="set screen options, 不会重新渲染页面"
          onPress={() =>
            nav.setOptions({
              title: `新Title${Date.now()}`,
              headerLeft: NewHeader.headerLeft,
              headerRight: NewHeader.headerRight,
            })
          }
        />
        <Button title="前往首页(默认Tab)" onPress={() => nav.navigate('home')} />
        <Button title="前往首页Tab3" onPress={() => nav.navigate('home_tab3')} />
        <Button
          title="再次前往页面1，参数id变了"
          onPress={() => {
            nav.push('route_page1', { id: Math.random().toString(16).slice(4) });
          }}
        />
        <Button
          title="前往页面2"
          onPress={() => nav.navigate('page2', { userId: 'from_page1' })}
        />
      </View>
    </View>
  );
}

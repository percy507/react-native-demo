import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { Button, IconFont } from '@/components';

export function Tab1Screen() {
  const nav = useNavigation();
  const route = useRoute();
  console.log('home_tab1', route);

  return (
    <View style={{ padding: 12 }}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>HomeScreen</Text>
        <Text>params: {JSON.stringify(route.params)}</Text>
        <Text>
          <Text>自定义图标: </Text>
          <IconFont name="icon-hashiqi" size={32} />
          <IconFont name="icon-pdf" size={32} />
          <IconFont name="icon-yasuo" size={32} />
          <IconFont name="icon-tupian" size={32} />
          <IconFont name="icon-wode" size={32} />
        </Text>
      </View>
      <View style={{ display: 'flex', gap: 6 }}>
        <Button title="nav.goBack()" onPress={() => nav.goBack()} />
        <Button title="前往首页Tab2" onPress={() => nav.navigate('home_tab2')} />
        <Button
          title="前往页面1"
          onPress={() => nav.navigate('page1', { id: 'from_home' })}
        />
        <Button title="前往页面2" onPress={() => nav.navigate('page2')} />
      </View>
    </View>
  );
}

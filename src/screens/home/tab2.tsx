import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { Button } from '@/components';

export function Tab2Screen() {
  const nav = useNavigation();
  const route = useRoute();
  console.log('home_tab2', route);

  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 24, paddingBottom: 16 }}>Tab2Screen</Text>
      <View style={{ display: 'flex', gap: 6 }}>
        <Button title="nav.goBack()" onPress={() => nav.goBack()} />
        <Button title="前往首页Tab1" onPress={() => nav.navigate('home_tab1')} />
      </View>
    </View>
  );
}

import { useNavigation, useRoute } from '@react-navigation/native';
import type {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components';

export function Page2Screen() {
  const nav = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute();
  console.log('page2', route);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('page2 mounted');
    setInterval(() => setCount((v) => v + 1), 1000);
    return () => console.log('page2 unmounted');
  }, []);

  return (
    <View style={{ padding: 12 }}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>Page2Screen</Text>
        <Text>params: {JSON.stringify(route.params)}</Text>
        <Text>count: {count}</Text>
      </View>
      <View style={{ display: 'flex', gap: 6 }}>
        <Button title="返回至上一个路由" onPress={() => nav.goBack()} />
        <Button title="前往首页(默认Tab)" onPress={() => nav.navigate('home')} />
        <Button
          title="前往页面1"
          onPress={() => nav.navigate('page1', { id: 'from_detail2' })}
        />
        <Button
          title="navigation.setOptions"
          subTitle="set screen options, 不会重新渲染页面"
          onPress={() =>
            nav.setOptions({
              headerTitle: (props) => <LogoTitle {...props} />,
            })
          }
        />
      </View>
    </View>
  );
}

const titleStyles = StyleSheet.create({
  logo: { width: 30, height: 30, marginRight: 12 },
});

const LogoTitle: NonNullable<NativeStackNavigationOptions['headerTitle']> = (props) => {
  const { children } = props;
  return (
    <View>
      <Text>
        <Image style={titleStyles.logo} source={require('../../assets/icon.png')} />
        <Text>{children}</Text>
      </Text>
    </View>
  );
};

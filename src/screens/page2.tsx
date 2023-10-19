import { useNavigation } from '@react-navigation/native';
import type {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Button, ScreenWrapper } from '@/components';

import { PageInfo } from './part';

export function Page2Screen() {
  const nav = useNavigation<NativeStackNavigationProp<any>>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('page2 mounted');
    setInterval(() => setCount((v) => v + 1), 1000);
    return () => console.log('page2 unmounted');
  }, []);

  return (
    <ScreenWrapper contentStyle={styles.root}>
      <PageInfo title="Page2Screen" texts={[`count: ${count}`]} />

      <View style={styles.list}>
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
    </ScreenWrapper>
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

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

// @ts-nocheck

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import type {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'jotai';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components';

import IconFont from './iconfont';

type RootStackParamList = {
  route_home: undefined;
  route_detail1: { id: string };
  route_detail2?: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator
          initialRouteName="route_home"
          // Sharing common options across screens
          screenOptions={{
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'monospace',
            },
          }}>
          <Stack.Screen
            name="route_home"
            component={HomeScreen}
            // 自定义 title
            options={{
              title: 'Home Title',
              headerStyle: { backgroundColor: '#4169E1' },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="route_detail1"
            // 动态 title
            options={({ route }) => ({ title: `Detail1 (${route.params.id})` })}>
            {(props) => <Detail1Screen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="route_detail2"
            component={Detail2Screen}
            initialParams={{ userId: 'userId_default' }}
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
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
        <Image style={titleStyles.logo} source={require('../assets/icon.png')} />
        <Text>{children}</Text>
      </Text>
    </View>
  );
};

type TabsParamList = {
  route_home_tab1: undefined;
  route_home_tab2: undefined;
  route_home_tab3: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

function HomeScreen(props: NativeStackScreenProps<RootStackParamList, 'route_home'>) {
  const { route } = props;
  console.log('route_home', route);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="route_home_tab1"
        component={Tab1Screen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="route_home_tab2"
        component={Tab2Screen}
        options={{
          tabBarLabel: '联系人',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-contact" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="route_home_tab3"
        component={Tab3Screen}
        options={{
          title: '我的哈哈哈哈哈哈',
          tabBarLabel: '我的哈哈哈哈哈哈',
          tabBarBadge: 999,
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-wode" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Tab1Screen(props: BottomTabScreenProps<TabsParamList, 'route_home_tab1'>) {
  const { navigation, route } = props;
  console.log('route_home_tab1', route);

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
        <Button title="navigation.goBack()" onPress={() => navigation.goBack()} />
        <Button
          title="前往首页Tab2"
          onPress={() => navigation.navigate('route_home_tab2')}
        />
        <Button
          title="前往详情页1"
          onPress={() => navigation.navigate('route_detail1', { id: 'from_home' })}
        />
        <Button
          title="前往详情页2"
          onPress={() => navigation.navigate('route_detail2')}
        />
      </View>
    </View>
  );
}

function Tab2Screen(props: BottomTabScreenProps<TabsParamList, 'route_home_tab2'>) {
  const { navigation, route } = props;
  console.log('route_home_tab2', route);

  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 24, paddingBottom: 16 }}>Tab2Screen</Text>
      <View style={{ display: 'flex', gap: 6 }}>
        <Button title="navigation.goBack()" onPress={() => navigation.goBack()} />
        <Button
          title="前往首页Tab1"
          onPress={() => navigation.navigate('route_home_tab1')}
        />
      </View>
    </View>
  );
}

function Tab3Screen(props: BottomTabScreenProps<TabsParamList, 'route_home_tab3'>) {
  const { navigation, route } = props;
  console.log('route_home_tab3', route);

  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 24, color: 'red', paddingBottom: 16 }}>Tab3Screen</Text>
      <View style={{ display: 'flex', gap: 6 }}>
        <Button title="navigation.goBack()" onPress={() => navigation.goBack()} />
        <Button
          title="前往首页Tab1"
          onPress={() => navigation.navigate('route_home_tab1')}
        />
      </View>
    </View>
  );
}

const NewHeader = {
  headerLeft: () => <Text>🥹</Text>,
  headerRight: () => <Button onPress={() => alert('This is a button!')} title="Info" />,
};

function Detail1Screen(
  props: NativeStackScreenProps<RootStackParamList, 'route_detail1'>,
) {
  const { navigation, route } = props;
  console.log('route_detail1', route);

  return (
    <View style={{ padding: 12 }}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>Detail1Screen</Text>
        <Text>params: {JSON.stringify(route.params)}</Text>
      </View>
      <View style={{ display: 'flex', gap: 6 }}>
        <Button title="navigation.goBack()" onPress={() => navigation.goBack()} />
        <Button title="navigation.popToTop()" onPress={() => navigation.popToTop()} />
        <Button
          title="navigation.setParams"
          subTitle="更新路由参数，会重新渲染页面"
          onPress={() =>
            navigation.setParams({ id: Math.random().toString(16).slice(4) })
          }
        />
        <Button
          title="navigation.setOptions"
          subTitle="set screen options, 不会重新渲染页面"
          onPress={() =>
            navigation.setOptions({
              title: `新Title${Date.now()}`,
              headerLeft: NewHeader.headerLeft,
              headerRight: NewHeader.headerRight,
            })
          }
        />
        <Button
          title="前往首页(默认Tab)"
          onPress={() => navigation.navigate('route_home')}
        />
        <Button
          title="前往首页Tab3"
          onPress={() => navigation.navigate('route_home_tab3')}
        />
        <Button
          title="再次前往详情页1，参数id变了"
          onPress={() => {
            navigation.push('route_detail1', { id: Math.random().toString(16).slice(4) });
          }}
        />
        <Button
          title="前往详情页2"
          onPress={() => navigation.navigate('route_detail2', { userId: 'from_detail1' })}
        />
      </View>
    </View>
  );
}

function Detail2Screen(
  props: NativeStackScreenProps<RootStackParamList, 'route_detail2'>,
) {
  const { navigation, route } = props;
  console.log('route_detail2', route);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('route_detail2 mounted');
    setInterval(() => setCount((v) => v + 1), 1000);
    return () => console.log('route_detail2 unmounted');
  }, []);

  return (
    <View style={{ padding: 12 }}>
      <View style={{ paddingBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>Detail2Screen</Text>
        <Text>params: {JSON.stringify(route.params)}</Text>
        <Text>count: {count}</Text>
      </View>
      <View style={{ display: 'flex', gap: 6 }}>
        <Button title="返回至上一个路由" onPress={() => navigation.goBack()} />
        <Button
          title="前往首页(默认Tab)"
          onPress={() => navigation.navigate('route_home')}
        />
        <Button
          title="前往详情页1"
          onPress={() => navigation.navigate('route_detail1', { id: 'from_detail2' })}
        />
      </View>
    </View>
  );
}

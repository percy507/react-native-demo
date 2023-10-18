import { NavigationContainer } from '@react-navigation/native';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Page1Screen } from '@/screens/page1';
import { Page2Screen } from '@/screens/page2';

import { BottomTabNavigator } from './bottom-tab';

const Stack = createNativeStackNavigator<ReactNavigation.RootParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={BottomTabNavigator}
          options={{
            title: 'Home Title',
            headerStyle: { backgroundColor: '#4169E1' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="page1"
          options={({ route }) => ({ title: `Page1 (${route.params.id})` })}>
          {() => <Page1Screen />}
        </Stack.Screen>
        <Stack.Screen
          name="page2"
          component={Page2Screen}
          initialParams={{ userId: 'userId_default' }}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
        />
      </Stack.Navigator>
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
        <Image style={titleStyles.logo} source={require('../../assets/icon.png')} />
        <Text>{children}</Text>
      </Text>
    </View>
  );
};

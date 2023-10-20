import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '@/screens/auth/login';
import { Page1Screen } from '@/screens/page1';
import { Page2Screen } from '@/screens/page2';

import { BottomTabNavigator } from './bottom-tab';

const RootStack = createStackNavigator<RouteParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <RootStack.Group>
          <RootStack.Screen name="login" component={LoginScreen} />
          <RootStack.Screen name="forget_password" component={BottomTabNavigator} />
        </RootStack.Group>
        <RootStack.Screen name="home" component={BottomTabNavigator} />
        <RootStack.Screen name="page1" component={Page1Screen} />
        <RootStack.Screen
          name="page2"
          component={Page2Screen}
          initialParams={{ userId: 'userId_default' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

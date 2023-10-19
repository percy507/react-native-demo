import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { Page1Screen } from '@/screens/page1';
import { Page2Screen } from '@/screens/page2';

import { BottomTabNavigator } from './bottom-tab';

const Stack = createStackNavigator<ReactNavigation.RootParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="home" component={BottomTabNavigator} />
        <Stack.Screen name="page1" component={Page1Screen} />
        <Stack.Screen
          name="page2"
          component={Page2Screen}
          initialParams={{ userId: 'userId_default' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

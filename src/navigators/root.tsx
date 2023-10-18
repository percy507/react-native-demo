import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

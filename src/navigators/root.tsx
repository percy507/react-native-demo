import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { BottomTabNavigator } from './bottom-tab';
import { RootRoutes } from './routes';

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
        <RootStack.Screen name="home" component={BottomTabNavigator} />
        {RootRoutes.map((el) => {
          return <RootStack.Screen key={el[0]} name={el[0]} component={el[1]} />;
        })}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

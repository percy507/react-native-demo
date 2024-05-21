import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '@/theme/color';

import { BottomTabs } from './routes';

const BottomTab = createBottomTabNavigator<RouteParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { height: 56 },
      }}>
      {BottomTabs.map((el) => {
        return (
          <BottomTab.Screen
            key={el.name}
            name={el.name}
            component={el.component}
            options={el.options}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}

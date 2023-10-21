import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { color } from '@/theme/color';

import { BottomTabs } from './routes';

const BottomTab = createBottomTabNavigator<RouteParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: color.primary }}>
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

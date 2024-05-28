import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/theme/color';

import { BottomTabs } from './routes';

const BottomTab = createBottomTabNavigator<RouteParamList>();

export function BottomTabNavigator() {
  const insets = useSafeAreaInsets();
  const tabbarHeight = px2dp(insets.bottom + 50);

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: { height: tabbarHeight, backgroundColor: '#fff' },
        tabBarLabelStyle: { fontSize: 12 },
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

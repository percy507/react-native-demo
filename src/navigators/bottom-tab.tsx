import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconFont from '@/iconfont';
import { Tab1Screen } from '@/screens/home/tab1';
import { Tab2Screen } from '@/screens/home/tab2';
import { Tab3Screen } from '@/screens/home/tab3';

const BottomTab = createBottomTabNavigator<ReactNavigation.RootParamList>();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home_tab1"
        component={Tab1Screen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="home_tab2"
        component={Tab2Screen}
        options={{
          tabBarLabel: '联系人',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="icon-contact" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="home_tab3"
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
    </BottomTab.Navigator>
  );
}

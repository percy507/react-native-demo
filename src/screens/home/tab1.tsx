import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { Button, IconFont, ScreenWrapper } from '@/components';

import { PageInfo } from '../part';

export function Tab1Screen() {
  const nav = useNavigation();

  return (
    <ScreenWrapper navbar={{ title: '首页' }}>
      <View style={styles.root}>
        <PageInfo title="HomeScreen" />

        <View>
          <Text>
            <Text>自定义图标: </Text>
            <IconFont name="icon-hashiqi" size={32} />
            <IconFont name="icon-pdf" size={32} />
            <IconFont name="icon-yasuo" size={32} />
            <IconFont name="icon-tupian" size={32} />
            <IconFont name="icon-wode" size={32} />
          </Text>
        </View>
        <View style={styles.list}>
          <Button title="nav.goBack()" onPress={() => nav.goBack()} />
          <Button title="前往首页Tab2" onPress={() => nav.navigate('home_tab2')} />
          <Button
            title="前往页面1"
            onPress={() => nav.navigate('page1', { id: 'from_home' })}
          />
          <Button title="前往页面2" onPress={() => nav.navigate('page2')} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import { Button, ScreenWrapper } from '@/components';

import { PageInfo } from '../part';

export function Tab3Screen() {
  const nav = useNavigation();

  return (
    <ScreenWrapper navbar={{ show: false }}>
      <View style={styles.root}>
        <PageInfo title="Tab3Screen" />

        <View style={styles.list}>
          <Button title="nav.goBack()" onPress={() => nav.goBack()} />
          <Button title="前往首页Tab1" onPress={() => nav.navigate('home_tab1')} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: { padding: 12 },
  list: { display: 'flex', gap: 6 },
});

import { StyleSheet, View } from 'react-native';

import { IconFont } from '@/components';

export default function Demo() {
  return (
    <View style={styles.root}>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        <IconFont name="icon-pdf" size={32} />
        <IconFont name="icon-yasuo" size={32} />
        <IconFont name="icon-tupian" size={32} />
        <IconFont name="icon-wode" size={32} />
      </View>
      <IconFont name="icon-hashiqi" size={120} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    gap: 10,
  },
});

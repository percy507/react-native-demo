import { StyleSheet } from 'react-native';

import { View } from '@/components';

export default function Demo() {
  return (
    <View style={styles.root}>
      <View style={{ width: 120, height: 120, backgroundColor: 'red' }} />
      <View
        style={{
          width: 200,
          height: 120,
          backgroundColor: 'red',
          alignSelf: 'flex-end',
          borderRadius: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 20, gap: 10 },
});

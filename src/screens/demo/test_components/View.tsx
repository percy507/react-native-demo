import { StyleSheet } from 'react-native';

import { Text, View } from '@/components';

export default function Demo() {
  return (
    <View style={styles.root}>
      <View center style={{ width: 120, height: 120, backgroundColor: 'red' }}>
        <Text>Center</Text>
      </View>
      <View
        style={{
          width: 200,
          height: 120,
          backgroundColor: 'deeppink',
          alignSelf: 'flex-end',
          borderRadius: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 20, gap: 10, flexDirection: 'row' },
});

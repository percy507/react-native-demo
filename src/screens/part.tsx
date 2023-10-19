import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export function PageInfo({ title, texts }: { title: string; texts?: string[] }) {
  const route = useRoute();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text>route_params: {JSON.stringify(route.params)}</Text>
      {texts?.map((el, index) => (
        <Text key={index}>{el}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingBottom: 20 },
  title: { fontSize: 20 },
});

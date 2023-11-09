import type { PressableProps } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';

import { Text } from '../Base/Text';

interface ExampleProps extends PressableProps {
  title: React.ReactNode;
}

export function Example(props: ExampleProps) {
  const { title, ...restProps } = props;
  return (
    <Pressable {...restProps} style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#4169E1',
    padding: 6,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

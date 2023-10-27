import type { PressableProps } from 'react-native';
import { Pressable, StyleSheet, Text } from 'react-native';

interface ExampleProps extends PressableProps {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
}

export function Example(props: ExampleProps) {
  const { title, subTitle, ...restProps } = props;
  return (
    <Pressable {...restProps} style={styles.root}>
      <Text style={styles.text}>{title}</Text>
      {subTitle != null && <Text style={styles.subtext}>{props.subTitle}</Text>}
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
  subtext: {
    color: '#fff',
    fontSize: 12,
  },
});

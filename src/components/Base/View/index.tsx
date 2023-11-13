import type { ViewProps as RNViewProps } from 'react-native';
import { StyleSheet, View as RNView } from 'react-native';

export interface ViewProps extends RNViewProps {
  /** 垂直水平均居中 */
  center?: boolean;
}

export function View(props: ViewProps) {
  const { center, style, ...restProps } = props;
  return <RNView style={[styles.root, center && styles.center, style]} {...restProps} />;
}

const styles = StyleSheet.create({
  root: {},
  center: { justifyContent: 'center', alignItems: 'center' },
});

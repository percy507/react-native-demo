import type { ViewProps as RNViewProps } from 'react-native';
import { StyleSheet, View as RNView } from 'react-native';

export interface ViewProps extends RNViewProps {}

export function View(props: ViewProps) {
  const { style, ...restProps } = props;
  return <RNView style={[styles.root, style]} {...restProps} />;
}

const styles = StyleSheet.create({
  root: {},
});

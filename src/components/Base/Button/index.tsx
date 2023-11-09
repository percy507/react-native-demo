import { StyleSheet } from 'react-native';
import type { ButtonProps as LibButtonProps } from 'react-native-ui-lib';
import { Button as LibButton } from 'react-native-ui-lib';

export type ButtonProps = LibButtonProps & {};

export function Button(props: ButtonProps) {
  const { style, ...restProps } = props;
  return <LibButton style={[styles.root, style]} {...restProps} />;
}

const styles = StyleSheet.create({
  root: {},
});

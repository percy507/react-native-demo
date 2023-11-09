import type { TextProps as RNTextProps } from 'react-native';
import { StyleSheet, Text as RNText } from 'react-native';

import { colors } from '@/theme/color';

export interface TextProps extends RNTextProps {
  type?: 'form_error';
}

export function Text(props: TextProps) {
  const { type, style, ...restProps } = props;
  const rootStyle = [styles.root, type === 'form_error' ? styles.formError : null, style];

  return <RNText style={rootStyle} {...restProps} />;
}

const styles = StyleSheet.create({
  root: {
    color: colors.font100,
    fontSize: 14,
  },
  formError: {
    color: colors.error,
    fontSize: 12,
  },
});

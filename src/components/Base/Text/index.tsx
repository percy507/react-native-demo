import type { TextProps as RNTextProps } from 'react-native';
import { StyleSheet, Text as RNText } from 'react-native';

import { colors } from '@/theme/color';

export interface TextProps extends RNTextProps {
  variant?: keyof typeof variants;
}

export function Text(props: TextProps) {
  const { variant, style, ...restProps } = props;
  const rootStyle = [styles.root, variant ? variants[variant] : null, style];
  return <RNText style={rootStyle} {...restProps} />;
}

const styles = StyleSheet.create({
  root: {
    color: colors.fontColor,
    fontSize: 14,
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontVariant: ['tabular-nums'],
  },
});

const variants = StyleSheet.create({
  form_error: { fontSize: 12, color: colors.error },
  hint: { fontSize: 12, color: colors.fontColorTint },
  h1: { fontSize: 18, lineHeight: 26, fontWeight: 'bold' },
  h2: { fontSize: 16, lineHeight: 22, fontWeight: 'bold' },
  h3: { fontSize: 14, lineHeight: 20, fontWeight: 'bold' },
});

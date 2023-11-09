import type { ImageProps as ExpoImageProps } from 'expo-image';
import { Image as ExpoImage } from 'expo-image';
import { StyleSheet } from 'react-native';

export interface ImageProps extends ExpoImageProps {}

export function Image(props: ImageProps) {
  const { style, ...restProps } = props;
  return <ExpoImage style={[styles.root, style]} {...restProps} />;
}

const styles = StyleSheet.create({
  root: {},
});

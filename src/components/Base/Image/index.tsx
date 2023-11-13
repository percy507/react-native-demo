import type { ImageProps as ExpoImageProps } from 'expo-image';
import { Image as ExpoImage } from 'expo-image';
import { resolveSources } from 'expo-image/src/utils/resolveSources';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { PinchableBox } from './PinchableBox';

export interface ImageProps extends ExpoImageProps {}

export function Image(props: ImageProps) {
  const { style, source, ...restProps } = props;
  const [preview, setPreview] = useState(false);
  const natvieSource = resolveSources(source);

  return (
    <>
      <ExpoImage
        style={[styles.root, style]}
        source={source}
        {...restProps}
        onTouchEnd={() => setPreview(true)}
      />
      {preview && natvieSource && (
        <PinchableBox source={natvieSource} onClose={() => setPreview(false)} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  root: {},
});

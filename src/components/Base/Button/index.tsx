import { StyleSheet } from 'react-native';
import type { ButtonProps as LibButtonProps } from 'react-native-ui-lib';
import { Button as LibButton } from 'react-native-ui-lib';

import { Loader } from '../../Loader';

export type ButtonProps = LibButtonProps & {
  loading?: boolean;
  /** @defaultValue `15` */
  loaderSize?: number;
};

export function Button(props: ButtonProps) {
  const { loading, loaderSize = 15, style, ...restProps } = props;

  return (
    <LibButton
      style={[styles.root, style]}
      iconSource={
        loading
          ? (style) => {
              // @ts-ignore
              const color = style?.[0]?.tintColor;
              return (
                <Loader size={loaderSize} color={color} style={{ marginRight: 8 }} />
              );
            }
          : undefined
      }
      {...restProps}
    />
  );
}

const styles = StyleSheet.create({
  root: {},
});

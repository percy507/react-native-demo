import LottieView from 'lottie-react-native';
import React from 'react';
import type { ViewProps, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import loadingAnimation from '@/assets/lottie/bounce-fruit.json';

import type { NavBarProps } from './NavBar';
import { NavBar } from './NavBar';

export interface ScreenWrapperProps extends Omit<ViewProps, 'style'> {
  navbar?: NavBarProps;
  contentStyle?: ViewStyle;
  loading?: boolean;
}

export function ScreenWrapper(props: ScreenWrapperProps) {
  const { navbar, contentStyle, loading, children, ...restProps } = props;
  const insets = useSafeAreaInsets();

  const rootPadding = {
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
    // paddingTop: insets.top, // this is managed by navbar
  };

  return (
    <View style={[styles.root, rootPadding]} {...restProps}>
      <View style={[styles.root]}>
        <NavBar {...navbar} />
        <View
          style={[styles.content, contentStyle]}
          pointerEvents={loading ? 'none' : 'auto'}>
          <View style={[styles.loader, loading ? styles.loading : null]}>
            <LottieView
              style={styles.loadingLottie}
              autoPlay
              loop
              source={loadingAnimation}
            />
          </View>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  loader: {
    paddingTop: 30,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: '#fff',
    display: 'none',
  },
  loading: { display: 'flex' },
  loadingLottie: { height: 60 },
  content: { flex: 1, width: '100%' },
});

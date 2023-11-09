import React from 'react';
import type { ScrollViewProps, ViewProps, ViewStyle } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '../Base/Text';
import { View } from '../Base/View';
import { Loader } from '../Loader';
import type { NavBarProps } from './NavBar';
import { NavBar } from './NavBar';

export interface ScreenWrapperProps extends Omit<ViewProps, 'style'> {
  navbar?: NavBarProps;
  contentStyle?: ViewStyle;
  loading?: boolean;
  /** @defaultValue `加载中...` */
  loadingText?: string;
  refreshControl?: ScrollViewProps['refreshControl'];
}

export function ScreenWrapper(props: ScreenWrapperProps) {
  const {
    navbar,
    contentStyle,
    loading,
    loadingText = '加载中...',
    refreshControl,
    children,
    ...restProps
  } = props;
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
        <ScrollView
          contentContainerStyle={[styles.content, contentStyle]}
          refreshControl={refreshControl}
          pointerEvents={loading ? 'none' : 'auto'}>
          <View style={[styles.loader, loading ? styles.loading : null]}>
            <Loader color="#fff" size={44} />
            <Text style={styles.loaderText}>{loadingText}</Text>
          </View>
          {children}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: 'rgba(255,255,255,1)' },
  loader: {
    paddingTop: 200,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'none',
  },
  loading: { display: 'flex' },
  loaderText: { color: '#fff', marginTop: 10 },
  content: { flexGrow: 1, width: '100%' },
});

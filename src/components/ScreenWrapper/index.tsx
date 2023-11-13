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
  /** @defaultValue `true` */
  contentIsScrollView?: boolean;
  contentStyle?: ViewStyle;
  loading?: boolean;
  /** @defaultValue `加载中...` */
  loadingText?: string;
  refreshControl?: ScrollViewProps['refreshControl'];
}

export function ScreenWrapper(props: ScreenWrapperProps) {
  const {
    navbar,
    contentIsScrollView = true,
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

  const ContentView = contentIsScrollView ? ScrollView : View;
  const contentViewProps = contentIsScrollView
    ? {
        contentContainerStyle: [styles.content, contentStyle],
        refreshControl,
      }
    : { style: [styles.content, contentStyle] };

  return (
    <View style={[styles.root, rootPadding]} {...restProps}>
      <View style={[styles.root]}>
        <NavBar {...navbar} />
        <ContentView {...contentViewProps} pointerEvents={loading ? 'none' : 'auto'}>
          <View style={[styles.loader, loading ? styles.loading : null]}>
            <Loader color="#fff" size={44} />
            <Text style={styles.loaderText}>{loadingText}</Text>
          </View>
          {children}
        </ContentView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: 'rgba(255,255,255,1)' },
  loader: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    paddingTop: 200,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'none',
  },
  loading: { display: 'flex' },
  loaderText: { color: '#fff', marginTop: 10 },
  content: { flexGrow: 1, width: '100%' },
});

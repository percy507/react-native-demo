import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import type { ViewStyle } from 'react-native';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import IconFont from '../IconFont';

export interface NavBarProps {
  /** @defaultValue true */
  show?: boolean;
  style?: ViewStyle;

  title?: React.ReactNode;
  /** @defaultValue center */
  titleAlign?: 'left' | 'center' | 'right';
  titleStyle?: ViewStyle;

  /** @defaultValue true */
  showBack?: boolean;
  backIconStyle?: {
    /** @defaultValue #333 */
    color?: string;
    /** @defaultValue 24 */
    size?: number;
  };

  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
}

export function NavBar(props: NavBarProps) {
  const {
    show = true,
    style = {},
    showBack = true,
    backIconStyle = {},
    title,
    titleAlign = 'center',
    titleStyle,
    leftNode,
    rightNode,
  } = props;

  const route = useRoute();
  const navigation = useNavigation();
  const back = () => navigation.goBack();

  const insets = useSafeAreaInsets();
  const rootPadding = {
    paddingTop: insets.top,
  };

  const renderLeft = () => {
    const getContent = () => {
      if (leftNode) return leftNode;
      if (showBack) {
        const { size = 24, color = '#333' } = backIconStyle;
        return (
          <Pressable onPress={back} style={styles.backNode}>
            <IconFont name="icon-back-arrow" size={size} color={color} />
          </Pressable>
        );
      }
    };
    return <View style={styles.leftNode}>{getContent()}</View>;
  };

  const renderRight = () => {
    return <View style={styles.rightNode}>{rightNode}</View>;
  };

  const renderTitle = () => {
    const style: ViewStyle[] = [
      styles.title,
      {
        justifyContent:
          titleAlign === 'left'
            ? 'flex-start'
            : titleAlign === 'right'
            ? 'flex-end'
            : 'center',
      },
    ];
    return (
      <View style={style}>
        <Text
          style={[styles.titleText, titleStyle]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {title != null ? title : route.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.root, rootPadding]}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      {show && (
        <View style={[styles.navbar, style]}>
          {renderLeft()}
          {renderTitle()}
          {renderRight()}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  navbar: {
    paddingTop: 10,
    paddingBottom: 6,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backNode: { width: 30 },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: { fontSize: 18, fontWeight: '500' },
  leftNode: { minWidth: 40, paddingLeft: 10 },
  rightNode: { minWidth: 40, paddingRight: 12, alignItems: 'flex-end' },
});

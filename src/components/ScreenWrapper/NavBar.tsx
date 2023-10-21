import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import type { ViewStyle } from 'react-native';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import IconFont from '../IconFont';

export interface NavBarProps {
  /** @defaultValue true */
  show?: boolean;

  color?: string;
  bgColor?: string;

  title?: React.ReactNode;
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
    color,
    bgColor,
    showBack = true,
    backIconStyle = {},
    title,
    titleStyle,
    leftNode,
    rightNode,
  } = props;

  const route = useRoute();
  const navigation = useNavigation();
  const back = () => navigation.goBack();

  const insets = useSafeAreaInsets();

  const renderLeft = () => {
    const getContent = () => {
      if (leftNode) return leftNode;
      if (showBack) {
        const _size = backIconStyle.size || 24,
          _color = backIconStyle.color || color || '#333';
        return (
          <Pressable onPress={back} style={styles.backNode}>
            <IconFont name="icon-back-arrow" size={_size} color={_color} />
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
    return (
      <View style={styles.title}>
        <Text
          style={[styles.titleText, { color, ...titleStyle }]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {title != null ? title : route.name}
        </Text>
      </View>
    );
  };

  const rootStyle: ViewStyle = {
    width: '100%',
    paddingTop: insets.top,
    backgroundColor: bgColor || 'transparent',
  };

  return (
    <View style={rootStyle}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      {show && (
        <View style={styles.navbar}>
          {renderLeft()}
          {renderTitle()}
          {renderRight()}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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

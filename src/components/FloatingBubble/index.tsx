import { Portal } from '@gorhom/portal';
import React, { Component } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import type {
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { colors } from '@/theme/color';

export interface FloatingBubbleProps {
  style?: StyleProp<ViewStyle>;
  content?: React.ReactNode;
  onPress?: () => void;
}

export class FloatingBubble extends Component<FloatingBubbleProps> {
  private translateX: Animated.Value;
  private translateY: Animated.Value;
  private lastOffset: { x: number; y: number };
  private onGestureEvent: (event: PanGestureHandlerGestureEvent) => void;

  constructor(props: FloatingBubbleProps) {
    super(props);
    this.translateX = new Animated.Value(0);
    this.translateY = new Animated.Value(0);
    this.lastOffset = { x: 0, y: 0 };
    this.onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this.translateX,
            translationY: this.translateY,
          },
        },
      ],
      { useNativeDriver: true },
    );
  }

  private onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastOffset.x += event.nativeEvent.translationX;
      this.lastOffset.y += event.nativeEvent.translationY;
      this.translateX.setOffset(this.lastOffset.x);
      this.translateX.setValue(0);
      this.translateY.setOffset(this.lastOffset.y);
      this.translateY.setValue(0);
    }
  };

  render() {
    const { style, content, onPress } = this.props;
    const rootStyle = [
      styles.root,
      { transform: [{ translateX: this.translateX }, { translateY: this.translateY }] },
      style,
    ];

    return (
      <Portal>
        <PanGestureHandler
          {...this.props}
          onGestureEvent={this.onGestureEvent}
          onHandlerStateChange={this.onHandlerStateChange}>
          <Animated.View style={rootStyle}>
            <TouchableOpacity
              style={styles.touchWrapper}
              onPress={onPress}
              activeOpacity={0.6}>
              {content}
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
      </Portal>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 2000,
    width: 50,
    height: 50,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderRadius: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  touchWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

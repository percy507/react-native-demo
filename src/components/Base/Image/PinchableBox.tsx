import { Portal } from '@gorhom/portal';
import React from 'react';
import type { ImageProps } from 'react-native';
import { Animated, StyleSheet } from 'react-native';
import type {
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  PinchGestureHandlerGestureEvent,
  PinchGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import {
  PanGestureHandler,
  PinchGestureHandler,
  State,
} from 'react-native-gesture-handler';

import IconFont from '@/components/IconFont';

import { View } from '../View';

interface PinchableBoxProps {
  source: ImageProps['source'];
  onClose?: () => void;
}

export class PinchableBox extends React.Component<PinchableBoxProps> {
  private panRef = React.createRef<PanGestureHandler>();
  private pinchRef = React.createRef<PinchGestureHandler>();

  private baseScale: Animated.Value;
  private pinchScale: Animated.Value;
  private scale: Animated.AnimatedMultiplication<number>;
  private lastScale: number;
  private onPinchGestureEvent: (event: PinchGestureHandlerGestureEvent) => void;

  private translateX: Animated.Value;
  private translateY: Animated.Value;
  private lastOffset: { x: number; y: number };
  private onGestureEvent: (event: PanGestureHandlerGestureEvent) => void;

  constructor(props) {
    super(props);

    /* Pinching */
    this.baseScale = new Animated.Value(1);
    this.pinchScale = new Animated.Value(1);
    this.scale = Animated.multiply(this.baseScale, this.pinchScale);
    this.lastScale = 1;
    this.onPinchGestureEvent = Animated.event(
      [{ nativeEvent: { scale: this.pinchScale } }],
      { useNativeDriver: true },
    );

    /** Translate */
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

  private onPinchHandlerStateChange = (event: PinchGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastScale *= event.nativeEvent.scale;
      this.baseScale.setValue(this.lastScale);
      this.pinchScale.setValue(1);
    }
  };

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
    return (
      <Portal>
        <View style={styles.wrapper} onTouchStart={this.props.onClose}>
          <IconFont
            onPress={this.props.onClose}
            style={styles.closeIcon}
            name="icon-close-circle-line"
            size={24}
            color="#fff"
          />
          <PanGestureHandler
            ref={this.panRef}
            minDist={10}
            minPointers={1}
            maxPointers={2}
            onGestureEvent={this.onGestureEvent}
            onHandlerStateChange={this.onHandlerStateChange}>
            <Animated.View collapsable={false} onTouchStart={(e) => e.stopPropagation()}>
              <PinchGestureHandler
                ref={this.pinchRef}
                onGestureEvent={this.onPinchGestureEvent}
                onHandlerStateChange={this.onPinchHandlerStateChange}>
                <Animated.Image
                  style={[
                    {
                      width: '100%',
                      aspectRatio: 1,
                      resizeMode: 'contain',
                      transform: [
                        { perspective: 200 },
                        { scale: this.scale },
                        { translateX: this.translateX },
                        { translateY: this.translateY },
                      ],
                    },
                  ]}
                  source={this.props.source}
                />
              </PinchGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </Portal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1000,
  },
});

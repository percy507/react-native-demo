import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import type { ViewStyle } from 'react-native';
import { Animated, StyleSheet, View } from 'react-native';

import Indicator from './indicator';

interface LoaderProps {
  style?: ViewStyle;
  /** @defaultValue 40 */
  size?: number;
  /** @defaultValue #333 */
  color?: string;
  /** @defaultValue 12 */
  count?: number;
}

/**
 * Current component is a copy of [`UIActivityIndicator`](https://github.com/n4kz/react-native-indicators).
 */
export class Loader extends PureComponent<LoaderProps> {
  static defaultProps = {
    color: '#333',
    count: 12,
    size: 40,
  };

  static propTypes = {
    ...Indicator.propTypes,
    color: PropTypes.string,
    size: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent({ index, count, progress }) {
    let { size, color: backgroundColor } = this.props as Required<LoaderProps>;
    let angle = (index * 360) / count;

    let layerStyle = {
      transform: [{ rotate: angle + 'deg' }],
    };

    let inputRange = Array.from(new Array(count + 1), (item, index) => index / count);

    let outputRange = Array.from(new Array(count), (item, index) =>
      Math.max(1.0 - index * (1 / (count - 1)), 0),
    );

    for (let j = 0; j < index; j++) {
      // @ts-ignore
      outputRange.unshift(outputRange.pop());
    }

    outputRange.unshift(...outputRange.slice(-1));

    let barStyle = {
      width: size / 10,
      height: size / 4,
      borderRadius: size / 20,
      backgroundColor,
      opacity: progress.interpolate({ inputRange, outputRange }),
    };

    return (
      <Animated.View style={[styles.layer, layerStyle]} {...{ key: index }}>
        <Animated.View style={barStyle} />
      </Animated.View>
    );
  }

  render() {
    let { style, size, ...props } = this.props as Required<LoaderProps>;

    return (
      <View style={[styles.container, style]}>
        <Indicator
          // @ts-ignore
          style={{ width: size, height: size }}
          renderComponent={this.renderComponent}
          {...props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  layer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

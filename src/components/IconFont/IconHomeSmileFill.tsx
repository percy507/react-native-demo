/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconHomeSmileFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 853.333333a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667v-384H42.666667l440.618666-400.554666a42.666667 42.666667 0 0 1 57.429334 0L981.333333 469.333333h-128v384zM320 554.666667a192 192 0 1 0 384 0h-85.333333a106.666667 106.666667 0 1 1-213.333334 0h-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHomeSmileFill.defaultProps = {
  size: 18,
};

IconHomeSmileFill = React.memo ? React.memo(IconHomeSmileFill) : IconHomeSmileFill;

export default IconHomeSmileFill;

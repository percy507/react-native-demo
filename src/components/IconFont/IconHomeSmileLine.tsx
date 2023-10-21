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

let IconHomeSmileLine: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 810.666667h512V390.698667l-256-232.704-256 232.704V810.666667z m554.666667 85.333333H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667v-384H42.666667l440.618666-400.554666a42.666667 42.666667 0 0 1 57.429334 0L981.333333 469.333333h-128v384a42.666667 42.666667 0 0 1-42.666666 42.666667zM320 554.666667h85.333333a106.666667 106.666667 0 1 0 213.333334 0h85.333333a192 192 0 1 1-384 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHomeSmileLine.defaultProps = {
  size: 18,
};

IconHomeSmileLine = React.memo ? React.memo(IconHomeSmileLine) : IconHomeSmileLine;

export default IconHomeSmileLine;

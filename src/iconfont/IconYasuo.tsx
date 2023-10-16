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

let IconYasuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M661.942857 73.142857H146.285714c-20.114286 0-36.571429 16.457143-36.571428 36.571429v804.571428c0 20.114286 16.457143 36.571429 36.571428 36.571429h731.428572c20.114286 0 36.571429-16.457143 36.571428-36.571429V325.485714L661.942857 73.142857z"
        fill={getIconColor(color, 0, '#FCD165')}
      />
      <Path
        d="M661.942857 288.914286c0 20.114286 16.457143 36.571429 36.571429 36.571428H914.285714L661.942857 73.142857v215.771429z"
        fill={getIconColor(color, 1, '#FFE3A6')}
      />
      <Path
        d="M334.628571 73.142857h73.142858v73.142857h-73.142858zM407.771429 146.285714h73.142857v73.142857h-73.142857zM334.628571 219.428571h73.142858v73.142858h-73.142858zM407.771429 292.571429h73.142857v73.142857h-73.142857zM334.628571 365.714286h73.142858v73.142857h-73.142858zM444.342857 694.857143h-73.142857c-20.114286 0-36.571429-16.457143-36.571429-36.571429v-109.714285h146.285715v109.714285c0 20.114286-14.628571 36.571429-36.571429 36.571429zM407.771429 438.857143h73.142857v73.142857h-73.142857z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

IconYasuo.defaultProps = {
  size: 18,
};

IconYasuo = React.memo ? React.memo(IconYasuo) : IconYasuo;

export default IconYasuo;

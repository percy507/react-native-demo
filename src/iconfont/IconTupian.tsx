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

let IconTupian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M661.942857 82.285714H146.285714c-20.114286 0-36.571429 16.457143-36.571428 36.571429v804.571428c0 20.114286 16.457143 36.571429 36.571428 36.571429h731.428572c20.114286 0 36.571429-16.457143 36.571428-36.571429V334.628571L661.942857 82.285714z"
        fill={getIconColor(color, 0, '#F96464')}
      />
      <Path
        d="M661.942857 298.057143c0 20.114286 16.457143 36.571429 36.571429 36.571428H914.285714L661.942857 82.285714v215.771429z"
        fill={getIconColor(color, 1, '#F79797')}
      />
      <Path
        d="M458.971429 689.371429c-9.142857 14.628571-23.771429 18.285714-36.571429 7.314285l-65.828571-54.857143c-16.457143-14.628571-43.885714-10.971429-54.857143 9.142858l-84.114286 140.8c-14.628571 23.771429 3.657143 54.857143 31.085714 54.857142h512c31.085714 0 47.542857-36.571429 27.428572-60.342857L592.457143 559.542857c-16.457143-18.285714-45.714286-16.457143-58.514286 5.485714l-74.971428 124.342858z"
        fill={getIconColor(color, 2, '#FFF8F8')}
      />
      <Path
        d="M786.285714 484.571429m-54.857143 0a54.857143 54.857143 0 1 0 109.714286 0 54.857143 54.857143 0 1 0-109.714286 0Z"
        fill={getIconColor(color, 3, '#FFF8F8')}
      />
    </Svg>
  );
};

IconTupian.defaultProps = {
  size: 18,
};

IconTupian = React.memo ? React.memo(IconTupian) : IconTupian;

export default IconTupian;

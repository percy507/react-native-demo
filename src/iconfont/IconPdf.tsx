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

let IconPdf: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M661.942857 82.285714H146.285714c-20.114286 0-36.571429 16.457143-36.571428 36.571429v804.571428c0 20.114286 16.457143 36.571429 36.571428 36.571429h731.428572c20.114286 0 36.571429-16.457143 36.571428-36.571429V334.628571L661.942857 82.285714z"
        fill={getIconColor(color, 0, '#EC5C59')}
      />
      <Path
        d="M661.942857 298.057143c0 20.114286 16.457143 36.571429 36.571429 36.571428H914.285714L661.942857 82.285714v215.771429z"
        fill={getIconColor(color, 1, '#EA8B8B')}
      />
      <Path
        d="M298.057143 424.228571h-84.114286v354.742858h56.685714v-124.342858h29.257143c62.171429 0 98.742857-43.885714 98.742857-118.857142-1.828571-73.142857-34.742857-111.542857-100.571428-111.542858z m-29.257143 62.171429H292.571429c34.742857 0 47.542857 14.628571 47.542857 51.2 0 38.4-14.628571 56.685714-45.714286 56.685714h-25.6v-107.885714zM504.685714 424.228571h-71.314285v354.742858h73.142857c76.8 0 122.514286-65.828571 122.514285-179.2 0-111.542857-43.885714-175.542857-124.342857-175.542858z m-14.628571 64h10.971428c47.542857 0 71.314286 36.571429 71.314286 113.371429s-23.771429 115.2-71.314286 115.2h-10.971428V488.228571zM828.342857 490.057143v-65.828572h-159.085714v354.742858h56.685714v-140.8h87.771429v-65.828572h-87.771429v-82.285714z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

IconPdf.defaultProps = {
  size: 18,
};

IconPdf = React.memo ? React.memo(IconPdf) : IconPdf;

export default IconPdf;

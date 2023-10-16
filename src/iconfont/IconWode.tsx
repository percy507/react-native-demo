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

let IconWode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M528.3 819.9c-170 0-308.3-138.3-308.3-308.4v-19.4h616.7v19.4c-0.1 170.1-138.4 308.4-308.4 308.4zM259.4 531c10 139.6 126.7 250.1 268.8 250.1S787.1 670.6 797.1 531H259.4z"
        fill={getIconColor(color, 0, '#383838')}
      />
      <Path
        d="M511.2 960C263.9 960 62.8 758.8 62.8 511.6c0-96.5 30.1-188 87.1-265.4l-48-152.9 207.5 17.9c62.3-31.4 131.9-48 201.9-48 247.2 0 448.4 201.1 448.4 448.4S758.4 960 511.2 960z m-355-823l36.7 116.7-6.2 8c-55.7 72.2-85.1 158.6-85.1 249.9 0 225.8 183.7 409.6 409.6 409.6s409.6-183.7 409.6-409.6C920.7 285.7 737 102 511.2 102c-66.5 0-130.1 15.6-189 46.2l-5 2.6-161-13.8z"
        fill={getIconColor(color, 1, '#383838')}
      />
      <Path
        d="M355.9 326.5m-64.7 0a64.7 64.7 0 1 0 129.4 0 64.7 64.7 0 1 0-129.4 0Z"
        fill={getIconColor(color, 2, '#383838')}
      />
      <Path
        d="M666.4 326.5m-64.7 0a64.7 64.7 0 1 0 129.4 0 64.7 64.7 0 1 0-129.4 0Z"
        fill={getIconColor(color, 3, '#383838')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

IconWode = React.memo ? React.memo(IconWode) : IconWode;

export default IconWode;

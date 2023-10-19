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

let IconBackArrow: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M418.81114136 511.99920975l284.04385414-284.04385413c7.65105307-7.6518433 7.65105307-20.17304128 0-27.82488459L674.89019539 172.16725218c-7.6518433-7.6518433-20.17225104-7.6518433-27.82409435-1e-8L349.11296636 470.12117712c-0.00079025 0.00079025-0.0023715 0.00079025-0.00395277 0.0023715l-27.96321885 27.96400908c-7.6518433 7.65026205-7.6518433 20.17225104 0 27.82409435l27.96321885 27.9640091c0.00158125 0.00158125 0.0023715 0.00158125 0.00395277 0.0023715l297.95392493 297.95392493c7.6518433 7.6518433 20.17225104 7.6518433 27.82409434 0l27.96400909-27.96321885c7.65105307-7.6518433 7.65105307-20.17304128 0-27.82488458L418.81114136 511.99920975z"
        fill={getIconColor(color, 0, '#272636')}
      />
    </Svg>
  );
};

IconBackArrow.defaultProps = {
  size: 18,
};

IconBackArrow = React.memo ? React.memo(IconBackArrow) : IconBackArrow;

export default IconBackArrow;

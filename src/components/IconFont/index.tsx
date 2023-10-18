/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconHome from './IconHome';
import IconPdf from './IconPdf';
import IconYasuo from './IconYasuo';
import IconTupian from './IconTupian';
import IconHashiqi from './IconHashiqi';
import IconWode from './IconWode';
import IconContact from './IconContact';
export { default as IconHome } from './IconHome';
export { default as IconPdf } from './IconPdf';
export { default as IconYasuo } from './IconYasuo';
export { default as IconTupian } from './IconTupian';
export { default as IconHashiqi } from './IconHashiqi';
export { default as IconWode } from './IconWode';
export { default as IconContact } from './IconContact';

export type IconNames =
  | 'icon-home'
  | 'icon-pdf'
  | 'icon-yasuo'
  | 'icon-tupian'
  | 'icon-hashiqi'
  | 'icon-wode'
  | 'icon-contact';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-home':
      return <IconHome key="1" {...rest} />;
    case 'icon-pdf':
      return <IconPdf key="2" {...rest} />;
    case 'icon-yasuo':
      return <IconYasuo key="3" {...rest} />;
    case 'icon-tupian':
      return <IconTupian key="4" {...rest} />;
    case 'icon-hashiqi':
      return <IconHashiqi key="5" {...rest} />;
    case 'icon-wode':
      return <IconWode key="6" {...rest} />;
    case 'icon-contact':
      return <IconContact key="7" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

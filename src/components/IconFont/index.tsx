/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconCheckboxCircleLine from './IconCheckboxCircleLine';
import IconCloseCircleLine from './IconCloseCircleLine';
import IconErrorWarningLine from './IconErrorWarningLine';
import IconBackArrow from './IconBackArrow';
import IconHome from './IconHome';
import IconPdf from './IconPdf';
import IconYasuo from './IconYasuo';
import IconTupian from './IconTupian';
import IconHashiqi from './IconHashiqi';
import IconWode from './IconWode';
import IconContact from './IconContact';
export { default as IconCheckboxCircleLine } from './IconCheckboxCircleLine';
export { default as IconCloseCircleLine } from './IconCloseCircleLine';
export { default as IconErrorWarningLine } from './IconErrorWarningLine';
export { default as IconBackArrow } from './IconBackArrow';
export { default as IconHome } from './IconHome';
export { default as IconPdf } from './IconPdf';
export { default as IconYasuo } from './IconYasuo';
export { default as IconTupian } from './IconTupian';
export { default as IconHashiqi } from './IconHashiqi';
export { default as IconWode } from './IconWode';
export { default as IconContact } from './IconContact';

export type IconNames =
  | 'icon-checkbox-circle-line'
  | 'icon-close-circle-line'
  | 'icon-error-warning-line'
  | 'icon-back-arrow'
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
    case 'icon-checkbox-circle-line':
      return <IconCheckboxCircleLine key="1" {...rest} />;
    case 'icon-close-circle-line':
      return <IconCloseCircleLine key="2" {...rest} />;
    case 'icon-error-warning-line':
      return <IconErrorWarningLine key="3" {...rest} />;
    case 'icon-back-arrow':
      return <IconBackArrow key="4" {...rest} />;
    case 'icon-home':
      return <IconHome key="5" {...rest} />;
    case 'icon-pdf':
      return <IconPdf key="6" {...rest} />;
    case 'icon-yasuo':
      return <IconYasuo key="7" {...rest} />;
    case 'icon-tupian':
      return <IconTupian key="8" {...rest} />;
    case 'icon-hashiqi':
      return <IconHashiqi key="9" {...rest} />;
    case 'icon-wode':
      return <IconWode key="10" {...rest} />;
    case 'icon-contact':
      return <IconContact key="11" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;

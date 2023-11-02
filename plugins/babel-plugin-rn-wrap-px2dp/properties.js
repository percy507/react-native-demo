const width = ['width', 'maxWidth', 'minWidth'];

const height = ['height', 'maxHeight', 'minHeight'];

const padding = [
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingStart',
  'paddingEnd',
  'paddingHorizontal',
  'paddingVertical',
];

const border = [
  'borderWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderStartWidth',
  'borderEndWidth',
];

const margin = [
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginStart',
  'marginEnd',
  'marginHorizontal',
  'marginVertical',
];

const radius = [
  'borderRadius',
  'borderTopStartRadius',
  'borderTopEndRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomStartRadius',
  'borderBottomEndRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'shadowRadius',
  'textShadowRadius',
];

const position = ['top', 'bottom', 'left', 'right', 'start', 'end'];

const flexBox = ['gap', 'rowGap', 'columnGap'];

const font = ['fontSize', 'lineHeight', 'letterSpacing'];

const distance = [
  ...width,
  ...height,
  ...padding,
  ...border,
  ...margin,
  ...radius,
  ...position,
  ...flexBox,
];

module.exports = [...distance, ...font];

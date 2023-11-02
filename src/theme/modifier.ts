import { Colors, Spacings, Typography } from 'react-native-ui-lib';

import { indigo } from './color';

// 色调
// https://github.com/wix/react-native-ui-lib/blob/40879e5806bfe01abb3846b439826f08f11e9637/src/style/designTokens.ts#L13
Colors.loadColors({
  $backgroundPrimaryHeavy: indigo.indigo6,
  $backgroundPrimaryMedium: indigo.indigo1,
  $backgroundPrimaryLight: indigo.indigo0,
});

// 定义字体样式
Typography.loadTypographies({
  // h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
  // h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
});

Spacings.loadSpacings({
  // page: isSmallScreen ? 16 : 20,
});

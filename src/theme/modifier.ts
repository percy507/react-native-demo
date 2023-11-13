import { Colors, Spacings, Typography } from 'react-native-ui-lib';

import { colors } from './color';

// 色调
// https://github.com/wix/react-native-ui-lib/blob/40879e5806bfe01abb3846b439826f08f11e9637/src/style/designTokens.ts#L13
Colors.loadColors({
  // BACKGROUND
  $backgroundDefault: colors.white,
  $backgroundElevated: colors.white,
  $backgroundElevatedLight: colors.white,
  // $backgroundNeutralHeavy: colorsPalette.grey20,
  // $backgroundNeutralIdle: colorsPalette.grey40,
  // $backgroundNeutralMedium: colorsPalette.grey60,
  // $backgroundNeutral: colorsPalette.grey70,
  // $backgroundNeutralLight: colorsPalette.grey80,
  $backgroundPrimaryHeavy: colors.primary,
  $backgroundPrimaryMedium: colors.primaryMedium,
  $backgroundPrimaryLight: colors.primaryLight,
  // $backgroundGeneralHeavy: colorsPalette.blue30,
  // $backgroundGeneralMedium: colorsPalette.blue70,
  // $backgroundGeneralLight: colorsPalette.blue80,
  // $backgroundSuccessHeavy: colorsPalette.green30,
  // $backgroundSuccessLight: colorsPalette.green80,
  // $backgroundWarningHeavy: colorsPalette.yellow30,
  // $backgroundWarningLight: colorsPalette.yellow70,
  // $backgroundMajorLight: colorsPalette.orange80,
  // $backgroundMajorHeavy: colorsPalette.orange30,
  // $backgroundDangerHeavy: colorsPalette.red30,
  // $backgroundDangerLight: colorsPalette.red80,
  // $backgroundDisabled: colorsPalette.grey50,
  // $backgroundDark: colorsPalette.grey10,
  // $backgroundDarkElevated: colorsPalette.grey10,
  // $backgroundDarkActive: colorsPalette.grey20,
  // $backgroundInverted: colorsPalette.grey10,

  // TEXT
  // $textDisabled: colorsPalette.grey50,
  // $textDefault: colorsPalette.grey10,
  // $textNeutralHeavy: colorsPalette.grey20,
  // $textNeutral: colorsPalette.grey30,
  // $textNeutralLight: colorsPalette.grey40,
  $textDefaultLight: colors.white,
  $textPrimary: colors.primary,
  // $textGeneral: colorsPalette.blue30,
  // $textSuccess: colorsPalette.green10,
  // $textSuccessLight: colorsPalette.green30,
  // $textMajor: colorsPalette.orange10,
  // $textDanger: colorsPalette.red10,
  // $textDangerLight: colorsPalette.red30,

  // ICON
  // $iconDefault: colorsPalette.grey10,
  // $iconNeutral: colorsPalette.grey20,
  $iconDefaultLight: colors.white,
  $iconPrimary: colors.primary,
  $iconPrimaryLight: colors.primaryLight,
  // $iconGeneral: colorsPalette.blue30,
  // $iconGeneralLight: colorsPalette.blue50,
  // $iconSuccess: colorsPalette.green10,
  // $iconSuccessLight: colorsPalette.green30,
  // $iconMajor: colorsPalette.orange10,
  // $iconDanger: colorsPalette.red10,
  // $iconDangerLight: colorsPalette.red30,
  // $iconDisabled: colorsPalette.grey50,

  // OUTLINE
  // $outlineDefault: colorsPalette.grey60,
  // $outlineDisabled: colorsPalette.grey50,
  // $outlineDisabledHeavy: colorsPalette.grey30,
  $outlinePrimary: colors.primary,
  // $outlineGeneral: colorsPalette.blue30,
  // $outlineWarning: colorsPalette.yellow30,
  // $outlineDanger: colorsPalette.red30,
  $outlineInverted: colors.white,
});

// 定义字体样式
Typography.loadTypographies({
  // h1: { fontSize: 58, fontWeight: '300', lineHeight: 80 },
  // h2: { fontSize: 46, fontWeight: '300', lineHeight: 64 },
});

Spacings.loadSpacings({
  // page: isSmallScreen ? 16 : 20,
});

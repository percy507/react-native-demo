import { Dimensions, StyleSheet } from 'react-native';

/** 设计稿宽度 */
export const UI_WIDTH = 375;

/** 转换设计稿的 px 为 react native 的 dp. */
export const px2dp = (px: number) => (Dimensions.get('window').width / UI_WIDTH) * px;

const sizeAttrs = [
  'width',
  'height',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'top',
  'right',
  'bottom',
  'left',
  'fontSize',
  'lineHeight',
];

/** 二次封装 StyleSheet，自动将尺寸类属性的单位从px转为dp */
export const PxStyleSheet: { create: typeof StyleSheet.create } = {
  create: (styles) => {
    for (let styleKey in styles) {
      for (let attrKey in styles[styleKey]) {
        const value = styles[styleKey][attrKey];
        if (sizeAttrs.includes(attrKey) && typeof value === 'number') {
          // @ts-ignore
          styles[styleKey][attrKey] = px2dp(value);
        }
      }
    }
    return StyleSheet.create(styles);
  },
};

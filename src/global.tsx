// define global variables

import { Dimensions } from 'react-native';

const _px2dp = (size) => {
  if (typeof size !== 'number') return size;
  return (Dimensions.get('window').width / UI_WIDTH) * size;
};

global.UI_WIDTH = 375;
global.px2dp = _px2dp;

declare global {
  /** 设计稿宽度 */
  var UI_WIDTH: number;
  /** 转换设计稿的 px 为 react native 的 dp. */
  var px2dp: typeof _px2dp;
}

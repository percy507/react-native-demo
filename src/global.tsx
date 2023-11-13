// define global variables

import dayjs from 'dayjs';
import * as FileSystem from 'expo-file-system';
import { Dimensions } from 'react-native';
import { consoleTransport, fileAsyncTransport, logger } from 'react-native-logs';

import { getBuildEnv } from '@/utils/env';

type LogType = 'debug' | 'info' | 'warn' | 'error';

declare global {
  /** 设计稿宽度 */
  var UI_WIDTH: number;
  /** 转换设计稿的 px 为 react native 的 dp. */
  var px2dp: typeof _px2dp;

  /** 窗口宽度，`Dimensions.get('window').width` */
  var WINDOW_WIDTH: number;
  /** 窗口高度，`Dimensions.get('window').height` */
  var WINDOW_HEIGHT: number;

  /** 记录日志 */
  var log: ReturnType<typeof logger.createLogger<LogType>>;
}

const _px2dp = (size, skip = false) => {
  if (skip) return size;
  if (typeof size !== 'number') return size;
  return (Dimensions.get('window').width / UI_WIDTH) * size;
};

global.UI_WIDTH = 375;
global.px2dp = _px2dp;

global.WINDOW_WIDTH = Dimensions.get('window').width;
global.WINDOW_HEIGHT = Dimensions.get('window').height;

const buildEnv = getBuildEnv();

global.log = logger.createLogger<LogType>({
  enabled: true,
  async: false,
  printLevel: true,
  printDate: true,
  levels: { debug: 0, info: 1, warn: 2, error: 3 },
  severity: buildEnv === 'debug' ? 'debug' : 'error',
  transport:
    buildEnv === 'debug' ? [consoleTransport, fileAsyncTransport] : fileAsyncTransport,
  transportOptions: {
    colors: {
      debug: 'greenBright',
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
    FS: FileSystem,
    fileName: 'main.log',
  },
  dateFormat: (d) => `[#${dayjs(d).format('YYYY-MM-DD HH:mm:ss')}] `,
});

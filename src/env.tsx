import Constants from 'expo-constants';
import { MMKV } from 'react-native-mmkv';

/** envStorage 主要用来记录当前的后端环境，不该存储其他数据。 */
const envStorage = new MMKV({
  id: 'env.store',
  encryptionKey: 'env-817489-@#',
});

export const getPersistentEnv = () => {
  return envStorage.getString('app_env') as APP_ENV_TYPE | undefined;
};
export const setPersistentEnv = (env: string) => envStorage.set('app_env', env);

/**
 * - `debug`: debug build (development build), 本地开发用，不支持页面中切换后端环境，如需切换后端环境，自行改代码
 * - `staging`: release build, 测试专用（产品走查、测试走查、演示），支持在页面中切换所有后端环境，默认为测试环境
 * - `release`: release build, 生产环境，不支持在页面中切换后端环境
 */
export type BUILD_ENV_TYPE = 'debug' | 'staging' | 'release';

/** 不同于 BUILD_ENV_TYPE, APP_ENV_TYPE 主要是区分app各个后端环境 */
export type APP_ENV_TYPE = 'local' | 'dev' | 'test' | 'prod';

const buildEnvMap = {
  debug: 'local',
  staging: 'test',
  release: 'prod',
} as const;

export const getBuildEnv = () => {
  return Constants.expoConfig?.extra?.buildEnv as BUILD_ENV_TYPE;
};

export const getAppEnv = () => {
  const buildEnv = getBuildEnv();
  if (buildEnv === 'staging') return getPersistentEnv() || buildEnvMap.staging;
  return buildEnvMap[buildEnv];
};

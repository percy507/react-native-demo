import { getAppEnv } from './env';

export const getConfig = () => {
  const APP_ENV = getAppEnv();

  const config = {
    local: {
      BASE_API: 'https://api.vvhan.com',
    },
    dev: {
      BASE_API: 'https://dev.example.com',
    },
    test: {
      BASE_API: 'https://test.example.com',
    },
    prod: {
      BASE_API: 'https://api.vvhan.com',
    },
  }[APP_ENV];

  return {
    ...config,
    urls: {
      userProtocol: 'https://pro.meitu.com/xiuxiu/agreements/common/service.html?lang=zh',
      privacyPolicy: 'https://pro.meitu.com/xiuxiu/agreements/common/policy.html?lang=zh',
    },
  };
};

import type { ToastProvider } from 'react-native-toast-notifications';

import { IconFont } from '@/components';

export const api = {
  BASE_API: 'https://api.vvhan.com',
};

export const urls = {
  userProtocol: 'https://pro.meitu.com/xiuxiu/agreements/common/service.html?lang=zh',
  privacyPolicy: 'https://pro.meitu.com/xiuxiu/agreements/common/policy.html?lang=zh',
};

export const toastProps: Omit<React.ComponentProps<typeof ToastProvider>, 'children'> = {
  duration: 1200,
  animationDuration: 100,
  animationType: 'slide-in',
  textStyle: { fontSize: 13 },
  normalColor: 'rgba(0,0,0,0.7)',
  successColor: 'rgba(9,184,62,1)',
  successIcon: <IconFont name="icon-checkbox-circle-line" color="#fff" size={20} />,
  dangerColor: 'rgba(224,49,49,1)',
  dangerIcon: <IconFont name="icon-close-circle-line" color="#fff" size={20} />,
  warningColor: 'rgba(230,119,0,1)',
  warningIcon: <IconFont name="icon-error-warning-line" color="#fff" size={20} />,
};

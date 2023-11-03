import { WebView } from 'react-native-webview';

import { ScreenWrapper } from '@/components';
import { getConfig } from '@/config';

export function UserProtocolScreen() {
  return (
    <ScreenWrapper navbar={{ title: '用户协议' }}>
      <WebView
        source={{ uri: getConfig().urls.userProtocol }}
        setSupportMultipleWindows={false}
      />
    </ScreenWrapper>
  );
}

export function PrivacyPolicyScreen() {
  return (
    <ScreenWrapper navbar={{ title: '隐私政策' }}>
      <WebView
        source={{ uri: getConfig().urls.privacyPolicy }}
        setSupportMultipleWindows={false}
      />
    </ScreenWrapper>
  );
}

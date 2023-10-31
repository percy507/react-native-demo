import { WebView } from 'react-native-webview';

import { ScreenWrapper } from '@/components';
import { urls } from '@/config';

export function UserProtocolScreen() {
  return (
    <ScreenWrapper navbar={{ title: '用户协议' }}>
      <WebView source={{ uri: urls.userProtocol }} setSupportMultipleWindows={false} />
    </ScreenWrapper>
  );
}

export function PrivacyPolicyScreen() {
  return (
    <ScreenWrapper navbar={{ title: '隐私政策' }}>
      <WebView source={{ uri: urls.privacyPolicy }} setSupportMultipleWindows={false} />
    </ScreenWrapper>
  );
}

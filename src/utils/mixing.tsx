// 按需引入 lodash
export { default as debounce } from 'lodash/debounce';
export { default as throttle } from 'lodash/throttle';

import * as Linking from 'expo-linking';
import * as Updates from 'expo-updates';
import { Toast } from 'react-native-toast-notifications';

export async function reloadApp() {
  await Updates.reloadAsync();
}

export function openExternalLink(url: string) {
  Linking.canOpenURL(url).then((canOpen) => {
    if (canOpen) Linking.openURL(url);
    else Toast.show('无法打开该链接', { type: 'warning' });
  });
}

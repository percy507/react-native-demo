// 按需引入 lodash
export { default as debounce } from 'lodash/debounce';
export { default as throttle } from 'lodash/throttle';

import * as Updates from 'expo-updates';

export async function reloadApp() {
  await Updates.reloadAsync();
}

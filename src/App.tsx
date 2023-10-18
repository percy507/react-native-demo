import { Provider } from 'jotai';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from '@/navigators';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}

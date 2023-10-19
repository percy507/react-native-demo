import 'react-native-gesture-handler';

import { Provider } from 'jotai';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useScreenOrientation } from '@/hooks';
import { RootNavigator } from '@/navigators';

export default function App(): JSX.Element {
  useScreenOrientation();

  return (
    <SafeAreaProvider>
      <Provider>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}

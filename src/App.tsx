import 'react-native-gesture-handler';

import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'jotai';
import { useCallback, useRef } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';

import { useScreenOrientation } from '@/hooks';
import { RootNavigator } from '@/navigators/root';
import { toastProps } from '@/utils/config';

// Keep the splash screen visible while the app is not ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  useScreenOrientation();

  const appIsReadyRef = useRef(false);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReadyRef.current) return;

    // 如果需要获取异步资源，可以在此控制splash screen的消失时机
    await new Promise((r) => setTimeout(r, 1000));

    // await SplashScreen.hideAsync();
    appIsReadyRef.current = true;
  }, []);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider>
        <ToastProvider {...toastProps}>
          <RootNavigator />
        </ToastProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

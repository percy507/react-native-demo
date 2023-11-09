import './global';
import './theme';

import { PortalProvider } from '@gorhom/portal';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'jotai';
import { useCallback, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';

import { DebugTool, ErrorBoundary, IconFont } from '@/components';
import { OrientationLock, useScreenOrientation } from '@/hooks';
import { RootNavigator } from '@/navigators/root';
import { colors } from '@/theme/color';

// Keep the splash screen visible while the app is not ready
SplashScreen.preventAutoHideAsync();

const toastProps: Omit<React.ComponentProps<typeof ToastProvider>, 'children'> = {
  duration: 1200,
  animationDuration: 100,
  animationType: 'slide-in',
  textStyle: { fontSize: px2dp(13) },
  normalColor: 'rgba(0,0,0,0.7)',
  successColor: colors.success,
  successIcon: <IconFont name="icon-checkbox-circle-line" color="#fff" size={20} />,
  dangerColor: colors.error,
  dangerIcon: <IconFont name="icon-close-circle-line" color="#fff" size={20} />,
  warningColor: colors.warn,
  warningIcon: <IconFont name="icon-error-warning-line" color="#fff" size={20} />,
};

export default function App() {
  useScreenOrientation({ initialOrientationLock: OrientationLock.PORTRAIT });

  const appIsReadyRef = useRef(false);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReadyRef.current) return;

    // 如果需要获取异步资源，可以在此控制splash screen的消失时机
    await new Promise((r) => setTimeout(r, 1000));

    appIsReadyRef.current = true;
    await SplashScreen.hideAsync();
    await NavigationBar.setBackgroundColorAsync('#fff');
  }, []);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ErrorBoundary>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PortalProvider>
            <Provider>
              <ToastProvider {...toastProps}>
                <RootNavigator />
                <DebugTool />
              </ToastProvider>
            </Provider>
          </PortalProvider>
        </GestureHandlerRootView>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

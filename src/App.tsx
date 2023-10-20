import 'react-native-gesture-handler';

import { Provider } from 'jotai';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';

import { IconFont } from '@/components';
import { useScreenOrientation } from '@/hooks';
import { RootNavigator } from '@/navigators/root';

const toastProps: Omit<React.ComponentProps<typeof ToastProvider>, 'children'> = {
  duration: 1200,
  animationDuration: 100,
  animationType: 'slide-in',
  textStyle: { fontSize: 15 },
  normalColor: 'rgba(0,0,0,0.7)',
  successColor: 'rgba(9,184,62,1)',
  successIcon: <IconFont name="icon-checkbox-circle-line" color="#fff" size={20} />,
  dangerColor: 'rgba(224,49,49,1)',
  dangerIcon: <IconFont name="icon-close-circle-line" color="#fff" size={20} />,
  warningColor: 'rgba(230,119,0,1)',
  warningIcon: <IconFont name="icon-error-warning-line" color="#fff" size={20} />,
};

export default function App(): JSX.Element {
  useScreenOrientation();

  return (
    <SafeAreaProvider>
      <Provider>
        <ToastProvider {...toastProps}>
          <RootNavigator />
        </ToastProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

import { Provider } from 'jotai';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import TestCoreComponents from './TestCoreComponents';

export const APP_NAME = 'MyRNProject';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
  };

  return (
    <Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <TestCoreComponents />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

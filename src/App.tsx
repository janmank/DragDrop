import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation';
import {Provider} from 'react-redux';
import Store from './redux/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </GluestackUIProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;

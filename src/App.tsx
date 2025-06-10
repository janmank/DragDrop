import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation';
import {Provider} from 'react-redux';
import Store from './redux/store';
import config from '../gluestack.config';
import './ReactotronConfig';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Provider store={Store}>
          <GluestackUIProvider config={config}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </GluestackUIProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

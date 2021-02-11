import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import AppProvider from './hooks';
import Routes from './routes'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes/auth.routes'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <Routes />
    </NavigationContainer>
  );
};

export default App;

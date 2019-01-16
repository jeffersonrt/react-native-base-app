import React from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';

import './config/ReactotronConfig';
import store from './store';

const App = () => (
  <Provider>
    <View>
      <Text>Welcome to React Native!</Text>
    </View>
  </Provider>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';

import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <View />
    {/* <Routes/> */}
  </Provider>
);

export default App;

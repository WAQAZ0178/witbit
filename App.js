import AsyncStorage from '@react-native-async-storage/async-storage';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {MainNavigator} from './src/navigation';
import store from './src/store';
const App = () => {
  const [themeApplied, setThemeApplied] = useState('black');
  const [toggle, setToggle] = React.useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;

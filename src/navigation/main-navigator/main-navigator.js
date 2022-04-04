// In App.js in a new project

import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Home from '../../screens/home/home';
const Stack = createStackNavigator();
import MyOrders from '../../screens/myOrders/myOrders';
const horizontalAnimation = {
  headerShown: false,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={horizontalAnimation}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
    </Stack.Navigator>
  );
};

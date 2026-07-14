import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stores from '../screens/Stores';

const Stack = createNativeStackNavigator();

const StoresNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Stores"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Stores" component={Stores} />
    </Stack.Navigator>
  );
};

export default StoresNavigator;
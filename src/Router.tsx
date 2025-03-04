import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MainScreen from './Pages/MainScreen';
import GameScreen from './Pages/GameScreen';
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'MainScreen'} component={MainScreen} />
        <Stack.Screen name={'GameScreen'} component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

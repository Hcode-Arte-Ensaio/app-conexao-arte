import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SignOutScreen from '../screens/SignOutScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="conexao-arte" component={WelcomeScreen} />
        <Stack.Screen name="cadastre-se" component={RegisterScreen} />
        <Stack.Screen name="sair" component={SignOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
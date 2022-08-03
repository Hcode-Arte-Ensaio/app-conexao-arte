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
        <Stack.Screen name="Conexão Arte" component={WelcomeScreen} />
        <Stack.Screen name="Cadastre-se" component={RegisterScreen} />
        <Stack.Screen name="Sair" component={SignOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
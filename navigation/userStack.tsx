import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import PlaceScreen from '../screens/PlaceScreen';
import { PlacesContextProvider } from '../context/PlacesContext';
import MainScreen from '../screens/MainScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerCustom from '../components/DrawerCustom';

const Drawer = createDrawerNavigator();

export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <PlacesContextProvider>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerCustom {...props} />}
          screenOptions={{
            drawerPosition: 'right',
          }}
          initialRouteName="Main"
        >
          <Drawer.Screen
            name="Main"
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Place"
            component={PlaceScreen}
            options={{
              headerShown: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PlacesContextProvider>
  );
}

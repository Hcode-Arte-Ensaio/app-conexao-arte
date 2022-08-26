import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PlaceScreen from '../screens/PlaceScreen';
import { PlacesContextProvider } from '../context/PlacesContext';
import MainScreen from '../screens/MainScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import DrawerCustom from '../components/DrawerCustom';
import { PlacePhotoScreen } from '../screens/PlacePhotoScreen';
import SignOutScreen from '../screens/SignOutScreen';

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
    <SafeAreaView style={styles.safeArea}>
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
            <Drawer.Screen
              name="PlacePhoto"
              component={PlacePhotoScreen}
              options={{ presentation: 'modal', headerShown: false }}
            />
              <Drawer.Screen
              name="sair"
              component={SignOutScreen}
              options={{
                headerShown: false,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PlacesContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },
});

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './components/Menu';
import PlaceScreen from './screens/PlaceScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalContext from './context/index';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {

  return (
    <GlobalContext>
    <Tab.Navigator
      tabBar={() => <Menu />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />      
    </Tab.Navigator>
    </GlobalContext>
  )

}

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
      <NavigationContainer theme={MyTheme}>
        
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,              
            }}
          />
          <Stack.Screen
            name="Place"
            component={PlaceScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
  },  
});

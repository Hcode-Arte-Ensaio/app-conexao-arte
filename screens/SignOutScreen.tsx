import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';


const SignOutScreen = ({ navigation}) => {

  return (
    <ScrollView>
      <View style={styles.container}>

      
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    width: '100%',
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    top: 5,
    right: 20,
  },
  container: {
    position: 'relative',
    paddingTop: 25,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    width: '100%',
    flex: 1,
    minHeight: 100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleDestak: {
    width: '100%',
    flex: 1,
    minHeight: 50,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 30,
    paddingTop:10,
    fontWeight: 'bold'
  },
  search: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontSize: 20,
  },
  destak: {
    width: '100%',
    height: 300,
    borderRadius: 25,
  },
  places: {
    width: '100%',
    flex: 4,
  },
  destakPlaces: {
    width: '85%',
    flex: 1,
    marginLeft: '8%',
    marginTop: '5%',
  },
  destakPlacesInside: {
    width: '100%',
    flex: 1,
  },
  favorites: {
    width: '100%',
    flex: 4,
  },
});
const h1 = StyleSheet.flatten([
    styles.titleDestak,
    styles.text,    
])
export default SignOutScreen;

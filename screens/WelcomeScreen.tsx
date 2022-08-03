import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';


const WelcomeScreen = ({ navigation}) => {

  return (
     <View style={styles.container}>
      <Text>Welcome screen!</Text>

      <View style={styles.buttons}>
        <Button title="Login" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign In')} />
        <Button title="Cadastre-se" type="outline" buttonStyle={styles.button} onPress={() => navigation.navigate('Cadastre-se')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10
  }
});

export default WelcomeScreen;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome screen!</Text>

      <View style={styles.buttons}>
        <Button
          title="Login"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('conexao-arte')}
        />
        <Button
          title="Cadastre-se"
          type="outline"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('cadastre-se')}
        />
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
    marginTop: 10,
  },
});

export default WelcomeScreen;

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
const auth = getAuth();
const RegisterScreen = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    cpassword: '',
    error: '',
  });

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email e Senha são obrigatórios',
      });
      return;
    }

    if (value.cpassword === '') {
      setValue({
        ...value,
        error: 'Confirme a senha!',
      });
      return;
    }
    if (value.cpassword !== value.password) {
      setValue({
        ...value,
        error: 'Senhas não conferem!',
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('conexao-arte');
    } catch (error: any) {
      if (error.code == 'auth/email-already-in-use') {
        error.message = 'E-mail já cadastrado!';
      }
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text>Cadastre-se</Text>

      <View style={styles.controls}>
        <Input
          placeholder="Email"
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon name="envelope" size={16} />}
        />

        <Input
          placeholder="Senha"
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon name="key" size={16} />}
        />
        <Input
          placeholder="Confirme a Senha"
          containerStyle={styles.control}
          value={value.cpassword}
          onChangeText={(text) => setValue({ ...value, cpassword: text })}
          secureTextEntry={true}
          leftIcon={<Icon name="key" size={16} />}
        />

        <Button
          title="Cadastrar"
          buttonStyle={styles.control}
          onPress={signUp}
        />
        {!!value.error && (
          <View style={styles.error}>
            <Text>{value.error}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    width: '90%',
    marginTop: '10%',
    flex: 1,
  },

  control: {
    marginTop: 10,
  },

  error: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#cde9fe',
  },
});
export default RegisterScreen;

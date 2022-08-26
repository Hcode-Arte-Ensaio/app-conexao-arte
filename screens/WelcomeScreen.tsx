import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FadeCarousel from 'rn-fade-carousel';
import Image1 from '../assets/main/sp1.jpg';
import Image2 from '../assets/main/sp2.jpg';
import Image3 from '../assets/main/sp3.jpg';
import Image4 from '../assets/main/sp4.jpg';
import Image5 from '../assets/main/sp5.jpg';
import spCultura from '../assets/sp-cultura.png';
import conexao from '../assets/conexao.png';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const auth = getAuth();

const LogoWrap = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 40px;
`;

const ImageWrap = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const WelcomeScreen = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: '',
  });

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'E-mail e Senha são obrigatórios',
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error: any) {
      setValue({
        ...value,
        error: 'Usuário ou Senha inválidos',
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.controls}>
        <Input
          placeholder="Email"
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon name="envelope" size={16} />}
        />

        <Input
          placeholder="Password"
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon name="key" size={16} />}
        />

        <Button title="Entrar" buttonStyle={styles.control} onPress={signIn} />

        <Button
          title="Cadastre-se"
          buttonStyle={styles.control}
          onPress={() => navigation.navigate('cadastre-se')}
        />
        {!!value.error && (
          <View style={styles.error}>
            <Text>{value.error}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    width: '90%',
    marginTop: '50%',
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
  menu: {
    position: 'absolute',
    top: 30,
    right: 20,
    padding: 10,
    width: 50,
    height: 50,
  },
  button: {
    height: 50,
    margin: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    color: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 10,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
  },
  innerContainer: {
    position: 'absolute',
    borderWidth: 2,
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'space-between',
  },
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageScroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    margin: 0,
    height: 100,
    alignItems: 'flex-start',
  },
  logoWrap: {
    width: '90%',
    height: 100,
  },
  logoConexaoWrap: {
    width: '90%',
    height: 100,
  },
  logoConexao: {
    width: '100%',
    height: 90,
  },
});

export default WelcomeScreen;

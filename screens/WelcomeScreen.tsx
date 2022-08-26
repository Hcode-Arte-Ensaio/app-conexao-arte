import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components/native';

const Input = styled.TextInput``;
const Button = styled.TouchableOpacity``;

const auth = getAuth();

const WelcomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: '',
  });

  const signIn = useCallback(async () => {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'E-mail e Senha são obrigatórios',
      });
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error: any) {
      setLoading(false);
      setValue({
        ...value,
        error: 'Usuário ou Senha inválidos',
      });
    }
  }, [value]);

  return (
    <View style={styles.controls}>
      <Input
        placeholder="Email"
        containerStyle={styles.control}
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
      />

      <Input
        placeholder="Password"
        containerStyle={styles.control}
        value={value.password}
        onChangeText={(text) => setValue({ ...value, password: text })}
        secureTextEntry={true}
      />

      {loading && <ActivityIndicator size={16} />}
      {!loading && (
        <Button title="Entrar" buttonStyle={styles.control} onPress={signIn} />
      )}

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

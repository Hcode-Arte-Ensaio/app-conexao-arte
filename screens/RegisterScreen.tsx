import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import styled from 'styled-components/native';
import logo from '../assets/conexao-cor.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Wrap = styled.View`
  flex: 1;
  padding: 20px;
`;

const LogoWrap = styled.View`
  align-items: center;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

const RegisterScreen = ({ navigation }) => {
  const auth = getAuth();

  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState({
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

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('conexao-arte');
    } catch (error: any) {
      setLoading(false);
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
    <Wrap>
      <LogoWrap>
        <Logo source={logo} resizeMode="contain" />
      </LogoWrap>

      <KeyboardAwareScrollView>
        <InputField
          label="Email"
          inputProps={{
            value: value.email,
            onChangeText: (text) => setValue({ ...value, email: text }),
            autoComplete: 'email',
            keyboardType: 'email-address',
          }}
        />

        <InputField
          label="Senha"
          style={{ marginTop: 20 }}
          inputProps={{
            value: value.password,
            onChangeText: (text) => setValue({ ...value, password: text }),
            secureTextEntry: true,
          }}
        />
        <InputField
          label="Confirme a Senha"
          style={{ marginTop: 20, marginBottom: 20 }}
          inputProps={{
            value: value.cpassword,
            onChangeText: (text) => setValue({ ...value, cpassword: text }),
            secureTextEntry: true,
          }}
        />

        <Button onPress={signUp} disabled={loading} loading={loading}>
          Cadastrar
        </Button>
        {!!value.error && (
          <View style={styles.error}>
            <Text>{value.error}</Text>
          </View>
        )}
      </KeyboardAwareScrollView>
    </Wrap>
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

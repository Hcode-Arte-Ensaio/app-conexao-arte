import { StatusBar } from 'expo-status-bar';
import { deleteUser, getAuth, signOut, updateProfile } from 'firebase/auth';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Text, ToastAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { InputField } from '../components/InputField';
import { useAuthentication } from '../utils/hooks/useAuthentication';

const Wrap = styled.View`
  flex: 1;
  padding: 20px;
`;

const ScreenContent = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const Link = styled.TouchableOpacity`
  background-color: #e74c3c;
  border-radius: 8px;
`;
const LinkText = styled.Text`
  text-align: center;
  font-weight: bold;
  padding: 10px;
  color: white;
  text-transform: uppercase;
`;

const MinhaContaScreen = ({ navigation }) => {
  const auth = getAuth();
  const { user } = useAuthentication();
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState('');

  const showToast = (message: string, duration = ToastAndroid.LONG) => {
    return ToastAndroid.show(message, duration);
  };

  const onDelete = useCallback(() => {
    Alert.alert(
      'Excluir Conta',
      'Deseja realmente excluir sua conta permanentemente? OBS: Após a confirmação este processo não poderá ser revertido.',
      [
        {
          text: 'Cancelar',
          onPress: () => showToast('Exclusão cancelada.'),
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            if (auth.currentUser) {
              setLoading(true);
              deleteUser(auth.currentUser)
                .then(() => {
                  showToast('Conta excluída com sucesso!');
                  navigation.navigate('Main');
                })
                .catch((error) => {
                  if (
                    error.message ===
                    'Firebase: Error (auth/requires-recent-login).'
                  ) {
                    Alert.alert(
                      'Atenção',
                      'Para excluir a conta é preciso ter se autenticado recentemente. Por favor, faça o login novamente para excluir sua conta.',
                      [
                        {
                          text: 'OK',
                          onPress: () => {
                            signOut(auth)
                              .then(() => {
                                navigation.navigate('conexao-arte');
                              })
                              .catch((error) => showToast(error.message));
                          },
                        },
                      ]
                    );
                  } else {
                    showToast(error.message);
                  }
                })
                .finally(() => setLoading(false));
            } else {
              showToast('Autenticação necessária.');
            }
          },
        },
      ]
    );
  }, [auth]);

  const onSave = useCallback(() => {
    if (user) {
      if (displayName.trim().length === 0) {
        return showToast('Preencha o seu nome.');
      }

      setLoading(true);

      updateProfile(user, {
        displayName,
      })
        .then(() => {
          showToast('Nome atualizado com sucesso!');
        })
        .catch((e) => {
          showToast(e.message);
        })
        .finally(() => setLoading(false));
    }
  }, [displayName, user]);

  useEffect(() => {
    if (user) {
      setDisplayName(user?.displayName ?? '');
    }
  }, [user]);

  if (user) {
    return (
      <Wrap>
        <StatusBar />
        <ScreenContent>
          <KeyboardAwareScrollView>
            <InputField
              label="Email"
              inputProps={{
                value: user.email ?? '',
                autoComplete: 'email',
                keyboardType: 'email-address',
              }}
              readOnly={true}
              style={{ marginBottom: 20 }}
            />
            <InputField
              label="Nome"
              inputProps={{
                value: displayName,
                onChangeText: (text) => setDisplayName(text),
              }}
              style={{ marginBottom: 20 }}
            />
            <Button onPress={onSave} disabled={loading} loading={loading}>
              Salvar
            </Button>
          </KeyboardAwareScrollView>
          <Link onPress={() => onDelete()}>
            <LinkText>Excluir conta</LinkText>
          </Link>
        </ScreenContent>
      </Wrap>
    );
  } else {
    return (
      <Wrap>
        <ActivityIndicator size={24} />
      </Wrap>
    );
  }
};

export default MinhaContaScreen;

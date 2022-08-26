import React, { useEffect } from 'react';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import UserStack from './userStack';
import AuthStack from './authStack';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const Wrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function RootNavigation() {
  const { user } = useAuthentication();

  if (user === undefined) {
    return (
      <Wrap>
        <ActivityIndicator size={24} />
      </Wrap>
    );
  } else if (user === null) {
    return <AuthStack />;
  } else {
    return <UserStack />;
  }
}

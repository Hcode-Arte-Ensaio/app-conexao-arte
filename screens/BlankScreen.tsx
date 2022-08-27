import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Wrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BlankScreen = () => {
  return (
    <Wrap>
      <Text>Blank</Text>
    </Wrap>
  );
};

export default BlankScreen;

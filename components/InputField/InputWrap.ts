import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { InputFocusedProps } from './InputFocusedProps';

export const InputWrap = styled.View<ViewProps & InputFocusedProps>`
  width: 100%;
  border: 1px solid ${(props) => (props.focused ? '#000' : '#CCC')};
  border-radius: 8px;
  padding: 10px;
`;

import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { InputFocusedProps } from './InputFocusedProps';

export const InputLabel = styled.Text<TextProps & InputFocusedProps>`
  width: 100%;
  color: ${(props) => (props.focused ? '#000' : '#CCC')};
`;

import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const ButtonWrap = styled.TouchableOpacity<TouchableOpacityProps>`
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #0984e3;
  border-radius: 8px;
  min-width: 150px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

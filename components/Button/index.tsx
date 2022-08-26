import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonProps } from './ButtonProps';
import { ButtonText } from './ButtonText';
import { ButtonWrap } from './ButtonWrap';

export const Button = (props: ButtonProps) => {
  const [buttonProps, setButtonProps] = useState<ButtonProps>(props);
  useEffect(() => setButtonProps(props), [props]);

  return (
    <ButtonWrap {...(buttonProps as any)}>
      {buttonProps.loading && (
        <ActivityIndicator size="small" style={{ marginRight: 10 }} />
      )}
      <ButtonText>{buttonProps.children}</ButtonText>
    </ButtonWrap>
  );
};

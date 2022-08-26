import { useState } from 'react';
import { TextInputProps, ViewStyle } from 'react-native';
import { Input } from './Input';
import { InputLabel } from './InputLabel';
import { InputWrap } from './InputWrap';

export function InputField({
  label,
  style,
  inputProps,
  readOnly = false,
}: {
  label: string;
  style?: ViewStyle;
  inputProps?: TextInputProps;
  readOnly?: boolean;
}) {
  const [focus, setFocus] = useState(false);

  if (readOnly) {
    return (
      <InputWrap focused={focus} style={{ ...style, borderWidth: 0 }}>
        <InputLabel focused={focus}>{label}</InputLabel>
        <Input
          {...(inputProps as any)}
          style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
        />
      </InputWrap>
    );
  }

  return (
    <InputWrap focused={focus} style={style}>
      <InputLabel focused={focus}>{label}</InputLabel>
      <Input
        {...(inputProps as any)}
        onFocus={(e) => {
          inputProps?.onFocus && inputProps.onFocus(e);
          setFocus(true);
        }}
        onBlur={(e) => {
          inputProps?.onBlur && inputProps.onBlur(e);
          setFocus(false);
        }}
      />
    </InputWrap>
  );
}

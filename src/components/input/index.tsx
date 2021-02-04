import React, { useState, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </Container>
  );
};

export default Input;

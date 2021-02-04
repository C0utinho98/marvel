import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 10px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #e62429;
      border-color: #e62429;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

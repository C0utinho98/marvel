import styled, { css } from 'styled-components';

interface StyleProps {
  open: boolean;
}

export const Container = styled.div`
  width: 100%;
  background-color: #000;
  padding: 0 30px;
  height: 80px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 130px;
    height: 60px;
  }
`;

export const CircleIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  height: 40px;
`;

export const Arrow = styled.div<StyleProps>`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  svg {
    transition: color 0.2s;
    cursor: pointer;
    &:hover {
      color: #e62429;
    }
  }

  ${props =>
    !props.open &&
    css`
      svg {
        transform: rotate(0);
        transition: transform 0.2s linear;
      }
    `}

  ${props =>
    props.open &&
    css`
      svg {
        transform: rotate(180deg);
        transition: transform 0.2s linear;
      }
    `}
`;

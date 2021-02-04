import styled, { keyframes } from 'styled-components';

const defaultAnimation = keyframes`
   from {
    top: -10px;
  }
  to {
    top: 0;
  }
`;

const onHoverAnimation = keyframes`
   from {
    top: 0;
  }
  to {
    top: -10px
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  img {
    max-width: 270px;
    height: 345px;
    position: relative;
    margin-bottom: 20px;
    display: inline-block;
    animation-duration: 0.5s;
    animation-name: ${defaultAnimation};
    animation-fill-mode: both;
  }

  &:hover {
    img {
      animation-duration: 0.5s;
      animation-name: ${onHoverAnimation};
      animation-fill-mode: both;
    }

    strong {
      color: #e62429;
    }
  }

  strong {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: #e62429;
  }

  cursor: pointer;

  margin-bottom: 50px;
`;

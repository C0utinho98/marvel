import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;

    &:hover {
      transition: color 0.2s;

      &:hover {
        color: #e62429;
      }
    }
  }
`;

export const Icon = styled.div`
  width: 45%;
  display: flex;
`;

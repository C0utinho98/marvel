import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 50px 50px 50px;
`;

export const Content = styled.div`
  min-height: 1000px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: row;
  grid-gap: 30px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

export const NotFound = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  height: 400px;
  width: 230px;

  @media (max-width: 560px) {
    height: 100%;
    width: 100%;
  } ;
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

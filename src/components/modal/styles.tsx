import styled from 'styled-components';

export const Container = styled.div`
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

export const Content = styled.div`
  width: 70%;
  height: 60%;
  background-color: #2d2d2d;
  border-radius: 10px;

  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 80%;
    height: 80%;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row-reverse;

  svg {
    cursor: pointer;
  }
`;

export const WrapperComic = styled.div`
  width: 100%;
  height: 95%;
  display: flex;

  img {
    width: 337px;
    height: 470px;
  }

  @media (max-width: 975px) {
    flex-direction: column;

    img {
      width: 200px;
      height: 300px;
      margin: 0 auto 15px auto;
    }
  } ;
`;

export const RightContent = styled.div`
  height: 95%;
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    width: 140px;
    margin: 0 auto;
  }

  @media (max-width: 975px) {
    flex-direction: column;
    width: auto;
    justify-content: space-between;

    h1 {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h1 {
      font-size: 20px;
    }

    button {
      margin-top: 5px;
      width: 100%;
    }
  } ;
`;

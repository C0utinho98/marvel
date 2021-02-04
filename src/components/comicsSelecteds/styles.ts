import styled, { css } from 'styled-components';

interface StyleProps {
  open: boolean;
}

export const Container = styled.div<StyleProps>`
  background-color: #000;
  padding: 0 10%;
  color: #6d6466;
  height: 520px;

  display: flex;
  flex-direction: column;

  ${props =>
    !props.open
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
`;

export const Content = styled.div`
  border-top: 0.5px solid #ffff;
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const WrapperCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  overflow: auto;
  white-space: nowrap;

  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    height: 10px;
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #e62429;
    border-radius: 10px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 230px;
  height: 300px;
  border-radius: 10px;
  margin: 15px;

  img {
    width: 215px;
    height: 90%;
    /* border-radius: 8px; */
  }

  .circle {
    cursor: pointer;
    position: absolute;
    top: -10px;
    left: 205px;
    display: none;
    background: #e62429;
    border-radius: 50%;
  }

  &:hover {
    .circle {
      display: flex;
    }
  }
`;

export const Name = styled.div`
  background: #fff;
  position: relative;
  top: -13px;
  height: 40px;
  border-radius: 10px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Email = styled.div`
  width: 300px;
  margin: auto;

  button {
    height: 30px;
    width: 100px;
    margin: 3px auto;
  }
`;

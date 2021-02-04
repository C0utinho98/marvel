import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectComic } from '../../store/comic/reducer/actions';
import { toggleModal } from '../../store/modal/reducer/actions';
import { IState } from '../../store';
import { Comics } from '../../store/comic/reducer/types';

import { Container } from './styles';

interface CardProp {
  data: Comics;
}

const Card: React.FC<CardProp> = ({ data }) => {
  const comics = useSelector<IState, Comics[]>(
    state => state.comic.comicsSelecteds,
  );
  const dispatch = useDispatch();

  const selectedComict = useCallback(() => {
    dispatch(selectComic(data));
    dispatch(toggleModal());
  }, [data, dispatch]);

  return (
    <Container onClick={selectedComict}>
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt={data.title}
      />
      <strong>{data.title}</strong>
      <span>{comics.find(el => el.id === data.id) ? 'Selected' : ''}</span>
    </Container>
  );
};

export default Card;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import Button from '../button';
import { IState } from '../../store';
import { toggleModal } from '../../store/modal/reducer/actions';
import { addComic } from '../../store/comic/reducer/actions';
import { Container, Content, Icon, WrapperComic, RightContent } from './styles';
import { IComicState } from '../../store/comic/reducer/types';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const open = useSelector<IState, boolean>(state => state.modal.open);
  const comic = useSelector<IState, IComicState>(state => state.comic);
  const { comicSelected, comicsSelecteds } = comic;

  return (
    <>
      {open && (
        <Container>
          <Content>
            <Icon>
              <GrClose size={20} onClick={() => dispatch(toggleModal())} />
            </Icon>
            {comicSelected && (
              <WrapperComic>
                <img
                  src={`${comicSelected.thumbnail.path}.${comicSelected.thumbnail.extension}`}
                  alt={comicSelected.title}
                />

                <RightContent>
                  <h1>{comicSelected.title}</h1>
                  {comicSelected.description && (
                    <div>
                      <strong>Description:</strong>
                      <p>{comicSelected.description}</p>
                    </div>
                  )}
                  {!comicsSelecteds.find(el => el.id === comicSelected.id) ? (
                    <Button
                      type="button"
                      onClick={() => {
                        dispatch(addComic(comicSelected));
                        dispatch(toggleModal());
                      }}
                    >
                      Select
                    </Button>
                  ) : (
                    ''
                  )}
                </RightContent>
              </WrapperComic>
            )}
          </Content>
        </Container>
      )}
    </>
  );
};

export default Modal;

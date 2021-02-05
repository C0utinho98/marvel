import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import {
  Card,
  WrapperCards,
  Name,
  Wrapper,
  Container,
  Content,
  Title,
  Email,
} from './styles';
import { IState } from '../../store';
import { Comics } from '../../store/comic/reducer/types';
import { removeComic } from '../../store/comic/reducer/actions';
import Button from '../button';
import Input from '../input';

interface ComicsProps {
  open: boolean;
  close: { (close: boolean): void };
}
const ComicsSelecteds: React.FC<ComicsProps> = ({ open, close }) => {
  const comics = useSelector<IState, Comics[]>(
    state => state.comic.comicsSelecteds,
  );
  const dispatch = useDispatch();
  const [comicsSelecteds, setComicsSelecteds] = useState<Comics[]>([]);
  const [email, setEmail] = useState('');
  useEffect(() => {
    setComicsSelecteds(comics);
    if (comics.length === 0) {
      close(false);
    }
  }, [comics]);

  const remove = useCallback(
    (id: string) => {
      dispatch(removeComic(id));
    },
    [dispatch],
  );

  const send = useCallback(() => {
    const body = comics.map(
      el =>
        `\n Title: ${el.title} \n Image: ${el.thumbnail.path}.${el.thumbnail.extension} \n Description: ${el.description} \n`,
    );
    window.open(
      `mailto:${email}?subject=Comics&body=${body.map(el =>
        encodeURIComponent(el),
      )}`,
    );
  }, [comics, email]);

  return (
    <Container open={open}>
      <Content>
        <Title>
          <strong>Selected comics</strong>
        </Title>
        <WrapperCards>
          {comicsSelecteds.map(el => (
            <Card key={el.id}>
              <Wrapper>
                <div className="circle">
                  <AiOutlineClose
                    color="#fff"
                    size={30}
                    onClick={() => remove(el.id)}
                    data-testid="remove"
                  />
                </div>
                <img
                  src={`${el.thumbnail.path}.${el.thumbnail.extension}`}
                  alt={el.title}
                />
                <Name>
                  <span>{el.title}</span>
                </Name>
              </Wrapper>
            </Card>
          ))}
        </WrapperCards>
      </Content>
      <Email>
        <Input
          name="email"
          placeholder="Type your email"
          onChange={e => setEmail(e.target.value)}
          icon={AiOutlineMail}
        />
        <Button type="button" onClick={send} disabled={email.length === 0}>
          Send
        </Button>
      </Email>
    </Container>
  );
};

export default ComicsSelecteds;

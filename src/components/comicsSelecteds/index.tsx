import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import emailjs from 'emailjs-com';
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
import { removeComic, clearState } from '../../store/comic/reducer/actions';
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
    emailjs
      .send(
        'default_service',
        `${process.env.REACT_APP_TEMPLATE_EMAIL}`,
        {
          message: comicsSelecteds.map(
            el => `
            <p>
              Title:
              ${el.title}
            </p>
            <img
              src="${el.thumbnail.path}.${el.thumbnail.extension}"
              alt="${el.title}"
            />
            <p>
              Description:
              ${el.description}
            </p>
          `,
          ),
          to_email: email,
        },
        `${process.env.REACT_APP_USER_EMAIL}`,
      )
      .then(() => {
        toast.success('Email successfully sent!');
        setEmail('');
        dispatch(clearState());
      })
      .catch(() => toast.error('Error sending email!'));
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
          value={email}
        />
        <Button type="button" onClick={send} disabled={email.length === 0}>
          Send
        </Button>
      </Email>
    </Container>
  );
};

export default ComicsSelecteds;

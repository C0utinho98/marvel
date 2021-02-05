import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';
import Logo from '../../assets/640px-MarvelLogo.png';
import { Container, Content, Arrow, CircleIcon } from './styles';
import ComicsSelecteds from '../comicsSelecteds';
import { IState } from '../../store';
import { Comics } from '../../store/comic/reducer/types';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const comics = useSelector<IState, Comics[]>(
    state => state.comic.comicsSelecteds,
  );

  useEffect(() => {
    if (comics.length > 0) {
      setOpen(true);
    }
  }, [comics]);

  return (
    <>
      <Container>
        <Content>
          <img src={Logo} alt="" />
        </Content>
      </Container>
      <ComicsSelecteds open={open} close={boll => setOpen(boll)} />
      <CircleIcon>
        {comics.length > 0 && (
          <Arrow
            onClick={() => setOpen(prevState => !prevState)}
            open={open}
            data-testid="open"
          >
            <IoIosArrowDown size={30} />
          </Arrow>
        )}
      </CircleIcon>
    </>
  );
};

export default Header;

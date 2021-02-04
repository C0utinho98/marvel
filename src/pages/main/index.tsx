import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Card from '../../components/card';
import { Container, Content, Item, Overlay, NotFound } from './styles';
import api from '../../services/api';
import { Comics } from '../../interfaces/comics';
import { Header, Pagination, Spinner, Input } from '../../components';

const Main: React.FC = () => {
  const [data, setData] = useState<Comics[]>([]);
  const [auxData, setAuxData] = useState<Comics[]>([]);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    const getComics = async () => {
      await api
        .get(
          `comics?ts=1611941633&apikey=4869b727d93758781625a424b37aab46&hash=029f7d986894f2d0f70c573085c0487a&offset=${page}`,
        )
        .then(response => {
          setData(response.data.data.results as Comics[]);
          setAuxData(response.data.data.results as Comics[]);
          setSize(response.data.data.total / 10);
          setLoading(false);
        });
    };
    getComics();
  }, [page]);

  useEffect(() => {
    if (searchTerm.length) {
      const results = data.filter(comic =>
        comic.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setData(results);
    } else {
      setData(auxData);
    }
  }, [searchTerm]);

  return (
    <>
      <Header />
      <Container>
        <div style={{ height: '85px' }}>
          <Input
            name="search"
            placeholder="Comic name"
            icon={BsSearch}
            onChange={event => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
        </div>
        {data.length ? (
          <Content>
            {data.map(el => (
              <Item key={el.id}>
                <Card data={el} />
              </Item>
            ))}
          </Content>
        ) : (
          !loading && (
            <NotFound>
              <span>Not found</span>
            </NotFound>
          )
        )}

        {!loading && (
          <Pagination
            size={size}
            page={page + 1}
            changePage={changePage => {
              setPage(changePage - 1);
              setSearchTerm('');
            }}
          />
        )}
      </Container>
      {loading && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
    </>
  );
};

export default Main;

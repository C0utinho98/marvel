import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Card from './index';
import { data, comicsSelecteds } from './mock';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockedDispatch,
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Card component', () => {
  it('Render component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(comicsSelecteds);
    render(<Card data={data} />);
  });
  it('Select comic', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(comicsSelecteds);
    const { getByTestId } = render(<Card data={{ ...data, id: '123' }} />);
    const container = getByTestId('select');
    fireEvent.click(container);
  });
});

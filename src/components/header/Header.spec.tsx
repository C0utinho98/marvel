import React from 'react';
import * as reactRedux from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import Header from './index';
import { comicsSelecteds } from './mock';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockedDispatch,
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Header component', () => {
  it('Render component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue([]);
    render(<Header />);
  });
  it('Open', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(comicsSelecteds);
    const { getByTestId } = render(<Header />);

    const open = getByTestId('open');
    fireEvent.click(open);
  });
});

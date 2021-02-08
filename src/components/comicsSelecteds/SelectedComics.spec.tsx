import React from 'react';
import * as reactRedux from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import SelectedComics from './index';
import { comicsSelecteds } from './mock';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockedDispatch,
    useSelector: jest.fn(fn => fn()),
  };
});

describe('SelectedComics component', () => {
  it('Render component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue([]);
    let closed;

    const close = (boll: boolean) => {
      closed = boll;
    };

    render(<SelectedComics open close={boll => close(boll)} />);
    expect(closed).toEqual(false);
  });
  it('Send email', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    useSelectorMock.mockReturnValue(comicsSelecteds);
    let closed;

    const close = (boll: boolean) => {
      closed = boll;
    };

    const { getByText, getByPlaceholderText } = render(
      <SelectedComics open close={boll => close(boll)} />,
    );

    window.open = jest.fn();

    const input = getByPlaceholderText('Type your email');
    const button = getByText('Send');
    fireEvent.change(input, { target: { value: 'teste@teste.com' } });
    fireEvent.click(button);
    expect(closed).toEqual(undefined);
  });
  it('Remove comic', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(comicsSelecteds);
    let closed;

    const close = (boll: boolean) => {
      closed = boll;
    };

    const { getByTestId } = render(
      <SelectedComics open close={boll => close(boll)} />,
    );

    const buttonRemove = getByTestId('remove');
    fireEvent.click(buttonRemove);
    expect(closed).toEqual(undefined);
  });
});

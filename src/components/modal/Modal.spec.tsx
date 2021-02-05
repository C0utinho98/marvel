import React from 'react';
import * as reactRedux from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import Modal from './index';
import { mockNotSelected, mockSelectedComics } from './mock';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockedDispatch,
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Modal component', () => {
  it('Render with comic not selected', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(mockNotSelected);
    render(<Modal />);
  });
  it('Render with comic selected', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(mockSelectedComics);
    render(<Modal />);
  });
  it('Close modal', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(mockSelectedComics);
    const { getByTestId } = render(<Modal />);

    const closeButton = getByTestId('close');

    fireEvent.click(closeButton);
  });

  it('Selecte comic', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(mockNotSelected);
    const { getByText } = render(<Modal />);

    const selectButton = getByText('Select');

    fireEvent.click(selectButton);
  });
});

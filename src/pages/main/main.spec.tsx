import React from 'react';
import * as reactRedux from 'react-redux';
import { render, fireEvent, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';
import Main from './index';
import { mock } from './mock';

const mockedDispatch = jest.fn();
const apiMock = new MockAdapter(api);

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockedDispatch,
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Main component', () => {
  it('Get data', async () => {
    jest.useFakeTimers();

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue([]);

    apiMock
      .onGet(
        'comics?ts=1611941633&apikey=4869b727d93758781625a424b37aab46&hash=029f7d986894f2d0f70c573085c0487a&offset=0',
      )
      .reply(200, { data: mock });

    await act(async () => {
      const { getByPlaceholderText } = render(<Main />);
      const input = getByPlaceholderText('Comic name');
      fireEvent.change(input, { target: { value: 'Marvel' } });
    });
  });
});

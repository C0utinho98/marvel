import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { FaAccusoft } from 'react-icons/fa';
import Input from './index';

describe('Input component', () => {
  it('render input', () => {
    const { getByPlaceholderText } = render(
      <Input name="teste" placeholder="test" />,
    );

    expect(getByPlaceholderText('test')).toBeTruthy();
  });
  it('input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="teste" placeholder="test" />,
    );

    const inputElement = getByPlaceholderText('test');
    const container = getByTestId('input-test');
    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(container).toHaveStyle('border-color:#e62429');
      expect(container).toHaveStyle('color:#e62429');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(container).not.toHaveStyle('border-color:#e62429');
      expect(container).not.toHaveStyle('color:#e62429');
    });
  });

  it('input with icon', () => {
    render(<Input name="teste" placeholder="test" icon={FaAccusoft} />);
  });
});

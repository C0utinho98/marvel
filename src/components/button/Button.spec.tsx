import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
  it('Render component', () => {
    render(<Button>Test</Button>);
  });
});

import { render } from '@testing-library/react';
import Calculator from './main/Calculator';
import Button from './components/Button/Button';
import Display from './components/Display/Display';

test('Renders Calculator', () => {
  render(<Calculator />);
});

test('Renders Button Component', () => {
  render(<Button />);
});

test('Renders Display Component', () => {
  render(<Display />);
});

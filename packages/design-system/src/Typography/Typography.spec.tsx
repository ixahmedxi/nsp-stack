import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('typography component', () => {
  it('should render the children', () => {
    render(<Typography>Hello world</Typography>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});

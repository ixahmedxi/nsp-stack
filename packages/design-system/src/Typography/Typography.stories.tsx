import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { Typography } from './Typography';

const config: Meta<typeof Typography> = {
  title: 'Design System / Typography',
  component: Typography,
  args: {
    children: 'Hello World',
  },
};

export default config;

export const Default: StoryObj<typeof Typography> = {
  play({ canvasElement }) {
    const canvas = within(canvasElement);

    expect(canvas.getByText('Hello World')).toBeTruthy();
  },
};

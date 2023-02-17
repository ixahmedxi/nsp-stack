import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import mainConfig from '../../../.storybook/main';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.mdx'],
  addons: [...(mainConfig.addons || [])],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../../../apps/web/next.config.mjs'),
    },
  },
};

export default config;

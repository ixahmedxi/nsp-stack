import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import mainConfig from '../../../.storybook/main';

const config: StorybookConfig = {
  stories: ['../../**/*.stories.@(js|jsx|ts|tsx|mdx)', '../../**/*.docs.mdx'],
  addons: [...(mainConfig.addons || [])],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../../../apps/web/next.config.mjs'),
    },
  },
};

export default config;

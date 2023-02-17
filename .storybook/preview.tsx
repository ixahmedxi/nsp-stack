import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Select the theme to apply on the stories',
    defaultValue: 'dark',
    toolbar: {
      icon: 'moon',
      items: ['both', 'light', 'dark'],
    },
  },
};

type Context = {
  globals: {
    theme: 'both' | 'light' | 'dark';
  };
};

export const decorators = [
  (Story: () => JSX.Element, context: Context) => {
    const theme = context.globals.theme;

    if (theme === 'light') {
      return (
        <div className="light_layout">
          <Story />
        </div>
      );
    }

    if (theme === 'dark') {
      return (
        <div className="dark_layout dark">
          <Story />
        </div>
      );
    }

    return (
      <div className="both_wrapper">
        <div className="dark_layout dark">
          <Story />
        </div>
        <div className="light_layout">
          <Story />
        </div>
      </div>
    );
  },
];

import {config as defaultConfig} from '@gluestack-ui/config';

export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      primary: '#3B82F6',
      secondary: '#F0F4F8',
    },
  },
};

export default config;

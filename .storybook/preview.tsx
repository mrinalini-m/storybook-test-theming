import '../src/styles/index.css';
import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryContext } from '@storybook/addons';
import { theme } from '../src/theming';
import { ThemeProvider } from 'react-jss';
import { useDarkMode } from 'storybook-dark-mode';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const withThemeProvider = (
  ComponentStory: Story,
  context: StoryContext
) => {
  const currTheme = useDarkMode() ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={currTheme}>
      <ComponentStory {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

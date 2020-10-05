import './index.css';
import '../src/styles/index.css';
import document from 'global/document';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import isChromatic from 'chromatic/isChromatic';
import { Story } from '@storybook/react/types-6-0';
import { StoryContext } from '@storybook/addons';
import { withCssResources } from '@storybook/addon-cssresources';
import { theme as appTheme, Theme } from '../src/theming';
import { createUseStyles, ThemeProvider, useTheme } from 'react-jss';
import React, { FC, ReactNode, useEffect } from 'react';

const useStyles = createUseStyles({
  storyContainer: {
    display: 'flex',
  },
  storyWrapper: {
    padding: '1rem',
  },
});

const useStylesWithTheme = createUseStyles({
  themeBlock: {
    background: ({ theme }: { theme: Theme }) => theme.background,
    height: '100vh',
    left: (props) => (props.side === 'left' ? 0 : '50vw'),
    overflow: 'auto',
    right: (props) => (props.side === 'right' ? '50vw' : 0),
    width: '50vw',
  },
});

/* This sets the appropriate background color to the storybook canvas. */
const ThemedSetRoot = () => {
  const theme: Theme = useTheme();
  useEffect(() => {
    document.body.style.background = theme.background;
  });
  return null;
};

/* This wrapper adds padding to the story since it was removed from .sb-show-main in ./index.css */
const StoryWrapper: FC<StoryWrapperProps> = ({
  children,
}: StoryWrapperProps) => {
  const classes = useStyles();

  return <div className={classes.storyWrapper}>{children}</div>;
};

interface StoryWrapperProps {
  children: ReactNode;
}

/* This adds a wrapper to style the left and right blocks for side-by-side viewing of dark and light themes. */
const ThemedBlock: FC<ThemedBlockProps> = ({
  children,
  ...props
}: ThemedBlockProps) => {
  const theme = useTheme();
  const classes = useStylesWithTheme({ ...props, theme });

  return (
    <div className={classes.themeBlock}>
      <StoryWrapper>{children}</StoryWrapper>
    </div>
  );
};

interface ThemedBlockProps {
  children: ReactNode;
  side: 'left' | 'right';
}

/* This is the decorator that wraps the stories with a theme provider and a wrapper div for side-by-side view. */
const ThemeWrapper = (
  ComponentStory: Story,
  { globals: { theme = 'light' } }: StoryContext
) => {
  const classes = useStyles();

  switch (theme) {
    case 'side-by-side': {
      return (
        <div className={classes.storyContainer}>
          <ThemeProvider theme={appTheme.light}>
            <ThemedBlock side="left">
              <ComponentStory />
            </ThemedBlock>
          </ThemeProvider>
          <ThemeProvider theme={appTheme.dark}>
            <ThemedBlock side="right">
              <ComponentStory />
            </ThemedBlock>
          </ThemeProvider>
        </div>
      );
    }
    default: {
      return (
        <ThemeProvider
          theme={theme === 'light' ? appTheme.light : appTheme.dark}
        >
          <ThemedSetRoot />
          <StoryWrapper>
            <ComponentStory />
          </StoryWrapper>
        </ThemeProvider>
      );
    }
  }
};

export const globalTypes = {
  theme: {
    /* Setting side-by-side as default for chromatic allows for visual regression testing on both dark and light themed stories. */
    defaultValue: isChromatic() ? 'side-by-side' : 'light',
    description: 'Global theme for components',
    name: 'Theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { icon: 'circlehollow', title: 'light', value: 'light' },
        { icon: 'circle', title: 'dark', value: 'dark' },
        {
          icon: 'sidebar',
          title: 'side by side',
          value: 'side-by-side',
        },
      ],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [withCssResources, ThemeWrapper];

/*
Option 1: Use storybook-dark-mode with a wrapper or provider.
It persists the theme even when you switch stories.
*/
import './test.css';
import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryContext } from '@storybook/addons';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const withThemeProvider = (
  ComponentStory: Story,
  context: StoryContext
) => {
  const themeClass = useDarkMode() ? 'dark' : '';

  return (
    <div className={themeClass}>
      <ComponentStory {...context} />
    </div>
  );
};

export const decorators = [withThemeProvider];

/* ------------------------------------------------------------ 
Option 2: Using storybook-dark-mode with parameters.
This switches the theme to default every time you switch a story.
*/

// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
// import './index.css'
// import { themes } from '@storybook/theming'

// export const parameters = {
// 	actions: { argTypesRegex: '^on[A-Z].*' },
// 	// controls: { expanded: true }, // uncomment to display controls with description and defaults
// 	viewport: {
// 		viewports: INITIAL_VIEWPORTS
// 	},
// 	darkMode: {
// 		current: 'light',
// 		dark: { ...themes.dark },
// 		light: { ...themes.light },
// 		darkClass: 'dark',
// 		lightClass: 'light',
// 		stylePreview: true
// 	}
// }

/* ------------------------------------------------------------ 
Option 3: With storybook's native theming. This doesn't change the canvas bg.
Note: Make sure to comment out storybook-dark-mode/register from ./main.js addons if going this route.
      You can also uninstall the package by running `npm uninstall storybook-dark-mode`.
*/

// import './test.css';
// import React from 'react';
// import { Story } from '@storybook/react/types-6-0';
// import { StoryContext } from '@storybook/addons';

// export const parameters = {
//   actions: { argTypesRegex: '^on.*' },
// };

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'light',
//     toolbar: {
//       items: [
//         { value: 'light', title: 'light', icon: 'circlehollow' },
//         { value: 'dark', title: 'dark', icon: 'circle' },
//       ],
//     },
//   },
// };

// export const withThemeProvider = (
//   ComponentStory: Story,
//   context: StoryContext
// ) => {
//   return (
//     <div className={context.globals.theme}>
//       <ComponentStory {...context} />
//     </div>
//   );
// };

// export const decorators = [withThemeProvider];

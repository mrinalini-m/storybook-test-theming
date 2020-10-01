// import { useDarkMode } from 'storybook-dark-mode';
// import React from 'react';
import { themes } from '@storybook/theming';
import './test.css';
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  darkMode: {
    current: 'light',
    dark: { ...themes.dark },
    light: { ...themes.normal },
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
};

// export const withThemeProvider = (ComponentStory, context) => {
//   console.log(context);
//   console.log(useDarkMode());
//   const themeClass = useDarkMode() ? 'pineapple-cake' : '';

//   return (
//     <div className={themeClass}>
//       <ComponentStory {...context} />
//     </div>
//   );
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

// export const decorators = [withThemeProvider];

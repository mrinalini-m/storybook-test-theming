import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Test } from '../stories/Test.stories';
import { ThemeProvider } from 'react-jss';
import { theme } from '../src/theming';

describe('Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Test>Hi Hi</Test>
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

import React from 'react';
import { ThemePaletteType } from '../theming';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme: ThemePaletteType) => ({
  test: {
    color: theme.colorPrimary,
  },
}));

export interface TestProps {
  children: React.ReactNode;
}

const TestComponent: React.FC<TestProps> = (props) => {
  const { children } = props;

  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  return (
    <div className={classes.test} data-testid="test-component">
      {children}
    </div>
  );
};

export default TestComponent;

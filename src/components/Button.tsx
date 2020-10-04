import React from 'react';
import { ThemePaletteType } from '../theming';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme: ThemePaletteType) => ({
  button: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.colorPrimary}`,
    borderRadius: '2px',
    color: theme.colorPrimary,
    cursor: 'pointer',
  },
}));

export interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  return (
    <button className={classes.button} data-testid="button-component">
      {children}
    </button>
  );
};

export default Button;

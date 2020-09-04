import React from 'react';
import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const renderNavigationButtons = () => {
    return Object.values(navigationConstants).map((navData, index) => {
      return (
        <Button key={index} component={Link} href={`/#${navData.id}`}>
          {navData.name}
        </Button>
      );
    });
  };

  return (
    <AppBar position='static' elevation={0} className={classes.root}>
      <Toolbar>
        <Typography component={Link} href='/' className={classes.title}>
          Evan Livelo
        </Typography>
        {renderNavigationButtons()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

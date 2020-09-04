import React, { useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import MobileDrawer from './mobileDrawer';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setMobileDrawerOpen(true);
  const handleDrawerClose = () => setMobileDrawerOpen(false);

  const renderNavigationButtons = () => {
    return Object.values(navigationConstants).map((navData, index) => {
      return (
        <Button
          key={index}
          component={Link}
          href={`/#${navData.id}`}
          className={classes.navButton}
        >
          {navData.name}
        </Button>
      );
    });
  };

  return (
    <>
      <AppBar position='static' elevation={0} className={classes.root}>
        <Toolbar>
          <Typography component={Link} href='/' className={classes.title}>
            Evan Livelo
          </Typography>
          {renderNavigationButtons()}
          <IconButton onClick={handleDrawerOpen} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileDrawer open={mobileDrawerOpen} onClose={handleDrawerClose} />
    </>
  );
};

export default Header;

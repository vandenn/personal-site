import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '300px',
    padding: theme.spacing(1),
  },
}));

const MobileDrawer = (props) => {
  const classes = useStyles();
  const { open, onClose } = props;

  const renderNavigationListItems = () => {
    return Object.values(navigationConstants).map((navData, index) => {
      return (
        <ListItem key={index}>
          <Link href={`/#${navData.id}`} onClick={onClose}>
            <ListItemText primary={navData.name} />
          </Link>
        </ListItem>
      );
    });
  };

  return (
    <Hidden smDown implementation='css'>
      <Drawer
        open={open}
        onClose={onClose}
        anchor='right'
        classes={{
          paper: classes.drawer,
        }}
      >
        <div>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <List>{renderNavigationListItems()}</List>
        </div>
      </Drawer>
    </Hidden>
  );
};

MobileDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileDrawer;

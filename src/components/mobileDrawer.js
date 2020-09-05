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
    width: '250px',
    padding: theme.spacing(1),
  },
  navLink: {
    cursor: 'pointer',
  },
}));

const MobileDrawer = (props) => {
  const classes = useStyles();
  const { open, onClose } = props;

  const createOnNavLinkClick = (sectionId) => (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${sectionId}`
    );
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const renderNavigationListItems = () => {
    return Object.values(navigationConstants).map((navData, index) => {
      const onNavLinkClick = createOnNavLinkClick(navData.id);
      return (
        <ListItem key={index}>
          <ListItemText
            primary={navData.name}
            primaryTypographyProps={{
              variant: 'subtitle2',
              color: 'primary',
              component: Link,
            }}
            onClick={onNavLinkClick}
            className={classes.navLink}
          />
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
        ModalProps={{
          disableRestoreFocus: true,
        }}
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

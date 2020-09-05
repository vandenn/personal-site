import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';

const ViewEntryButton = (props) => {
  const { href } = props;

  return (
    <Button
      component={Link}
      href={href}
      target='_blank'
      rel='noopener'
      variant='outlined'
      underline='none'
      color='primary'
      size='large'
    >
      View
    </Button>
  );
};

ViewEntryButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default ViewEntryButton;

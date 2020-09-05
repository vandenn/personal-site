import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';

import constants from 'constants/common';

const ContactButton = (props) => {
  const { text } = props;

  return (
    <Button
      component={Link}
      href={`mailto:${constants.email}`}
      target='_blank'
      rel='noopener'
      variant='contained'
      underline='none'
      color='primary'
      size='large'
    >
      {text}
    </Button>
  );
};

ContactButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ContactButton;

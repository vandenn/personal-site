import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Link } from '@material-ui/core';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';

const SocialButton = (props) => {
  const { name, url } = props;

  const renderIcon = () => {
    switch (name) {
      case 'Email':
        return <Email />;
      case 'Github':
        return <GitHub />;
      case 'Linkedin':
        return <LinkedIn />;
      default:
        return null;
    }
  };

  return (
    <Link href={url}>
      <IconButton>{renderIcon()}</IconButton>
    </Link>
  );
};

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialButton;

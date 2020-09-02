import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Head = (props) => {
  const { metadata } = props;

  return (
    <Helmet>
      <title lang='en'>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
    </Helmet>
  );
};

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Head;

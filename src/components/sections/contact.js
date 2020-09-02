import React from 'react';
import PropTypes from 'prop-types';

import constants from 'constants/common';
import navigationConstants from 'constants/navigation';

const Hero = (props) => {
  const { data } = props;
  const { html, frontmatter } = data[0].node;

  return (
    <div id={navigationConstants.contact.id}>
      <h1>{frontmatter.title}</h1>
      <form action={`mailto:${constants.email}`}>
        <input type='submit' value={frontmatter.buttonText} />
      </form>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;

import React from 'react';
import PropTypes from 'prop-types';

import constants from 'constants/common';

const Hero = (props) => {
  const { data } = props;
  const { frontmatter } = data[0].node;

  const renderSpecialties = () => {
    return (
      <ul>
        {frontmatter.specialties.map((specialty, index) => {
          return <li key={index}>{specialty}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <p>{frontmatter.title}</p>
      <h1>{frontmatter.name}</h1>
      <p>{frontmatter.subtitle}</p>
      {renderSpecialties()}
      <form action={`mailto:${constants.email}`}>
        <input type='submit' value={frontmatter.buttonText} />
      </form>
    </div>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;

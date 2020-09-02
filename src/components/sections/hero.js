import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const { data } = props;
  const { frontmatter } = data[0].node;
  console.log(frontmatter);

  const renderSpecialties = () => {
    return (
      <ul>
        {frontmatter.specialties.map((specialty) => {
          return <li>{specialty}</li>;
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
      <button>{frontmatter.buttonText}</button>
    </div>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;

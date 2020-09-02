import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const About = (props) => {
  const { data } = props;
  const { html, frontmatter } = data[0].node;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <Img fixed={frontmatter.avatar.childImageSharp.fixed} alt='Evan' />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;

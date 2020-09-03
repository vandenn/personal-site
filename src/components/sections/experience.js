import React from 'react';
import PropTypes from 'prop-types';

import navigationConstants from 'constants/navigation';

const Experience = (props) => {
  const { data } = props;

  const renderExperienceEntry = (node, index) => {
    const { html, frontmatter } = node;
    const { company, title, range } = frontmatter;
    return (
      <div key={index}>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <h4>{range}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  };

  return (
    <div id={navigationConstants.experience.id}>
      <h1>My work experience</h1>
      {data.map(({ node }, index) => renderExperienceEntry(node, index))}
    </div>
  );
};

Experience.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Experience;

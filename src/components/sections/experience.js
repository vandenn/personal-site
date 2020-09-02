import React from 'react';
import PropTypes from 'prop-types';

import navigationConstants from 'constants/navigation';

const Experience = (props) => {
  const { data } = props;

  const renderExperienceEntry = (node) => {
    const { html, frontmatter } = node;
    const { company, title, range } = frontmatter;
    return (
      <div id={navigationConstants.experience.id}>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <h4>{range}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  };

  return (
    <div>
      <h1>My work experience</h1>
      {data.map(({ node }) => renderExperienceEntry(node))}
    </div>
  );
};

Experience.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Experience;

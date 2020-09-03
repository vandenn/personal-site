import React from 'react';
import PropTypes from 'prop-types';

import navigationConstants from 'constants/navigation';

const Publications = (props) => {
  const { data } = props;

  const renderPublicationEntry = (node, index) => {
    const { html, frontmatter } = node;
    const { title, coauthors, publisher, link } = frontmatter;
    return (
      <div key={index}>
        <h2>{title}</h2>
        <h3>{publisher}</h3>
        <h4>{`With: ${coauthors}`}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <a href={link}>View</a>
      </div>
    );
  };

  return (
    <div id={navigationConstants.publications.id}>
      <h1>Publications I've made with wonderful people</h1>
      {data.map(({ node }, index) => renderPublicationEntry(node, index))}
    </div>
  );
};

Publications.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Publications;

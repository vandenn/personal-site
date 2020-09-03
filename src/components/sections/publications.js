import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import SectionLayout from './sectionLayout';
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
    <SectionLayout id={navigationConstants.publications.id}>
      <Typography variant='h3'>
        Publications I've made with wonderful people
      </Typography>
      {data.map(({ node }, index) => renderPublicationEntry(node, index))}
    </SectionLayout>
  );
};

Publications.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Publications;

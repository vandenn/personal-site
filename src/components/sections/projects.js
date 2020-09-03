import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import SectionLayout from './sectionLayout';
import navigationConstants from 'constants/navigation';

const Projects = (props) => {
  const { data } = props;

  const renderProjectEntry = (node, projectIndex) => {
    const { html, frontmatter } = node;
    const { title, tech, link } = frontmatter;

    const renderTech = () => {
      return (
        <>
          <h4>Tech</h4>
          <ul>
            {tech.map((techEntry, techIndex) => {
              return <li key={techIndex}>{techEntry}</li>;
            })}
          </ul>
        </>
      );
    };

    return (
      <div key={projectIndex}>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {renderTech()}
        <a href={link}>View</a>
      </div>
    );
  };

  return (
    <SectionLayout id={navigationConstants.projects.id}>
      <Typography variant='h3'>Some interesting projects I've made</Typography>
      {data.map(({ node }, index) => renderProjectEntry(node, index))}
    </SectionLayout>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;

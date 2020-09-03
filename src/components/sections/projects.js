import React from 'react';
import PropTypes from 'prop-types';

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
    <div id={navigationConstants.projects.id}>
      <h1>Some projects I've made</h1>
      {data.map(({ node }, index) => renderProjectEntry(node, index))}
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;

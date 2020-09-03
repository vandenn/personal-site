import React from 'react';
import PropTypes from 'prop-types';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(2),
  },
}));

const Education = (props) => {
  const classes = useStyles();
  const { data } = props;

  const renderEducationEntry = (node, index) => {
    const { html, frontmatter } = node;
    const { institution, degree, range, link } = frontmatter;
    return (
      <div key={index}>
        <Link href={link}>
          <Typography variant='h5'>{institution}</Typography>
        </Link>
        <h3>{degree}</h3>
        <h4>{range}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  };

  return (
    <SectionLayout id={navigationConstants.education.id}>
      <Typography variant='h3'>Amazing places where I've studied</Typography>
      <div className={classes.content}>
        {data.map(({ node }, index) => renderEducationEntry(node, index))}
      </div>
    </SectionLayout>
  );
};

Education.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Education;

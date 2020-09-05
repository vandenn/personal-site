import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(2),
  },
  experienceEntry: {
    padding: theme.spacing(2),
  },
}));

const Experience = (props) => {
  const classes = useStyles();
  const { data } = props;

  const renderExperienceEntry = (node, index) => {
    const { html, frontmatter } = node;
    const { company, title, range } = frontmatter;
    return (
      <Grid item key={index}>
        <Paper elevation={5} className={classes.experienceEntry}>
          <Typography variant='h6'>{company}</Typography>
          <Typography variant='subtitle1'>{title}</Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {range}
          </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
        </Paper>
      </Grid>
    );
  };

  return (
    <SectionLayout id={navigationConstants.experience.id}>
      <Typography
        variant='h3'
        color='primary'
        style={{ display: 'inline-block' }}
      >
        Cool places I've{' '}
        <Typography
          variant='h3'
          color='secondary'
          style={{ display: 'inline-block' }}
        >
          worked
        </Typography>
      </Typography>
      <Grid
        container
        direction='column'
        spacing={2}
        className={classes.content}
      >
        {data.map(({ node }, index) => renderExperienceEntry(node, index))}
      </Grid>
    </SectionLayout>
  );
};

Experience.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Experience;

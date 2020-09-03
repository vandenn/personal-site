import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(2),
  },
  educationEntry: {
    padding: theme.spacing(2),
  },
}));

const Education = (props) => {
  const classes = useStyles();
  const { data } = props;

  const renderEducationEntry = (node, index) => {
    const { html, frontmatter } = node;
    const { institution, degree, range, link } = frontmatter;
    const allocatedSize = Math.max(4, 12 / data.length);
    return (
      <Grid item key={index} xs={12} sm={allocatedSize}>
        <Paper elevation={0} variant='outlined'>
          <Grid container direction='column' className={classes.educationEntry}>
            <Grid item>
              <Typography variant='h6'>{degree}</Typography>
            </Grid>
            <Grid item>
              <Grid item>
                <Link href={link}>
                  <Typography variant='subtitle1'>{institution}</Typography>
                </Link>
              </Grid>
              <Typography variant='subtitle2' color='textSecondary'>
                {range}
              </Typography>
            </Grid>
            <Grid item>
              <Typography dangerouslySetInnerHTML={{ __html: html }} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  };

  return (
    <SectionLayout id={navigationConstants.education.id}>
      <Typography variant='h3'>Highlights of my education</Typography>
      <Grid container spacing={2} className={classes.content}>
        {data.map(({ node }, index) => renderEducationEntry(node, index))}
      </Grid>
    </SectionLayout>
  );
};

Education.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Education;

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px',
    padding: '50px',
  },
  content: {
    marginTop: theme.spacing(2),
  },
  textContainer: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
  },
  imageContainer: {
    width: '100%',
  },
}));

const About = (props) => {
  const classes = useStyles();
  const { data } = props;
  const { html, frontmatter } = data[0].node;

  return (
    <SectionLayout id={navigationConstants.about.id}>
      <Typography variant='h3' color='primary'>
        {frontmatter.title}
      </Typography>
      <Grid
        container
        alignItems='center'
        spacing={4}
        className={classes.content}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Paper elevation={5} className={classes.imageContainer}>
            <Img fluid={frontmatter.avatar.childImageSharp.fluid} alt='Evan' />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Paper elevation={5} className={classes.textContainer}>
            <Typography>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </SectionLayout>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;

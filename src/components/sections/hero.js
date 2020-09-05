import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SocialButtonGroup from 'components/social/socialButtonGroup';
import constants from 'constants/common';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '50px',
    textAlign: 'center',
  },
  name: {
    fontSize: '6rem',
  },
  specialties: {
    marginTop: theme.spacing(1),
  },
  contactButton: {
    marginTop: theme.spacing(4),
  },
  socialButtonsContainer: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = (props) => {
  const classes = useStyles();
  const { data } = props;
  const { frontmatter } = data[0].node;

  const renderSpecialties = () => {
    const specialtiesString = frontmatter.specialties.reduce(
      (result, specialty, index) => {
        if (index > 0) {
          result = result.concat(' • ');
        }
        result = result.concat(specialty);
        return result;
      },
      ''
    );
    return (
      <Typography variant='h6' className={classes.specialties}>
        {specialtiesString}
      </Typography>
    );
  };

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.root}
    >
      <Grid item>
        <Typography variant='h4' color='secondary'>
          {frontmatter.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h2' color='primary' className={classes.name}>
          {frontmatter.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h4' color='secondary'>
          {frontmatter.subtitle}
        </Typography>
      </Grid>
      <Grid item>{renderSpecialties()}</Grid>
      <Grid item>
        <Button
          component={Link}
          href={`mailto:${constants.email}`}
          target='_blank'
          rel='noopener'
          variant='contained'
          underline='none'
          color='primary'
          size='large'
          className={classes.contactButton}
        >
          {frontmatter.buttonText}
        </Button>
      </Grid>
      <Grid item className={classes.socialButtonsContainer}>
        <SocialButtonGroup />
      </Grid>
    </Grid>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;

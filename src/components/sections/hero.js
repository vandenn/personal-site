import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactButton from 'components/contactButton';
import SocialButtonGroup from 'components/social/socialButtonGroup';

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
  contactButtonContainer: {
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
        <Zoom in={true} timeout={1500}>
          <Typography variant='h2' color='primary' className={classes.name}>
            {frontmatter.name}
          </Typography>
        </Zoom>
      </Grid>
      <Grid item>
        <Typography variant='h4' color='secondary'>
          {frontmatter.subtitle}
        </Typography>
      </Grid>
      <Grid item>{renderSpecialties()}</Grid>
      <Grid item>
        <div className={classes.contactButtonContainer}>
          <ContactButton text={frontmatter.buttonText} />
        </div>
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

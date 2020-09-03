import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SocialButtonGroup from 'components/social/socialButtonGroup';
import constants from 'constants/common';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '100px',
  },
  contactButton: {
    marginTop: theme.spacing(2),
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
    return <Typography variant='body1'>{specialtiesString}</Typography>;
  };

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.root}
    >
      <Grid item>
        <Typography variant='h4'>{frontmatter.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='h2'>{frontmatter.name}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6'>{frontmatter.subtitle}</Typography>
      </Grid>
      <Grid item>{renderSpecialties()}</Grid>
      <Grid item>
        <Button
          component={Link}
          href={`mailto:${constants.email}`}
          variant='outlined'
          className={classes.contactButton}
        >
          {frontmatter.buttonText}
        </Button>
      </Grid>
      <Grid item>
        <SocialButtonGroup />
      </Grid>
    </Grid>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;

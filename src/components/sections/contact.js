import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import SocialButtonGroup from 'components/social/socialButtonGroup';
import constants from 'constants/common';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  contactButton: {
    marginTop: theme.spacing(2),
  },
  socialButtonsContainer: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = (props) => {
  const classes = useStyles();
  const { data } = props;
  const { html, frontmatter } = data[0].node;

  return (
    <SectionLayout id={navigationConstants.contact.id}>
      <Grid container direction='column' alignItems='center'>
        <Grid item>
          <Typography variant='h3'>{frontmatter.title}</Typography>
        </Grid>
        <Grid item>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
        </Grid>
        <Grid item>
          <Button
            component={Link}
            href={`mailto:${constants.email}`}
            target='_blank'
            rel='noopener'
            variant='contained'
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
    </SectionLayout>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;

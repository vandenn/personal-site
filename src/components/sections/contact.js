import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactButton from 'components/contactButton';
import SectionLayout from './sectionLayout';
import SocialButtonGroup from 'components/social/socialButtonGroup';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
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
      <Grid
        container
        direction='column'
        alignItems='center'
        className={classes.root}
      >
        <Grid item>
          <Typography variant='h3' color='secondary'>
            {frontmatter.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Typography>
        </Grid>
        <Grid item>
          <ContactButton text={frontmatter.buttonText} />
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

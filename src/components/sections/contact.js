import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import constants from 'constants/common';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  contactButton: {
    marginTop: theme.spacing(2),
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
          <Typography>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Typography>
        </Grid>
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
      </Grid>
    </SectionLayout>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;

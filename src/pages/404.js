import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from 'components/Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '50px',
    paddingTop: '200px',
    paddingBottom: '200px',
    textAlign: 'center',
  },
  grow: {
    flexGrow: 1,
  },
}));

const PageNotFound = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid
        container
        direction='column'
        alignItems='center'
        className={classes.root}
      >
        <Grid item>
          <Typography variant='h2' color='primary'>
            404
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h4' color='secondary'>
            Page not found
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PageNotFound;

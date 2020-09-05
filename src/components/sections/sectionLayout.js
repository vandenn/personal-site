import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px',
    padding: '50px',
    backgroundColor: theme.palette.background.paperSecondary,
    [theme.breakpoints.down('sm')]: {
      margin: '10px',
      marginBottom: '50px',
      padding: '20px',
    },
  },
}));

const SectionLayout = (props) => {
  const classes = useStyles();
  const { children, id } = props;

  return (
    <Paper elevation={5} className={classes.root}>
      <span id={id}>{children}</span>
    </Paper>
  );
};

SectionLayout.propTypes = {
  id: PropTypes.string,
};

export default SectionLayout;

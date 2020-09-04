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
  publicationEntry: {
    padding: theme.spacing(2),
  },
}));

const Publications = (props) => {
  const classes = useStyles();
  const { data } = props;

  const renderPublicationEntry = (node, index) => {
    const { html, frontmatter } = node;
    const { title, coauthors, publisher, link } = frontmatter;
    const allocatedSize = Math.max(4, 12 / data.length);
    return (
      <Grid item key={index} xs={12} sm={allocatedSize}>
        <Paper variant='outlined' square className={classes.publicationEntry}>
          <Typography
            component={Link}
            href={link}
            target='_blank'
            rel='noopener'
            variant='h6'
          >
            {title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {publisher}
          </Typography>
          <Typography variant='subtitle1'>{`With: ${coauthors}`}</Typography>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
          <Link href={link} target='_blank' rel='noopener'>
            View
          </Link>
        </Paper>
      </Grid>
    );
  };

  return (
    <SectionLayout id={navigationConstants.publications.id}>
      <Typography variant='h3'>
        Publications I've made with wonderful people
      </Typography>
      <Grid container spacing={2} className={classes.content}>
        {data.map(({ node }, index) => renderPublicationEntry(node, index))}
      </Grid>
    </SectionLayout>
  );
};

Publications.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Publications;

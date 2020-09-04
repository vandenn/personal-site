import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Link, Paper, Typography } from '@material-ui/core';
import { DescriptionOutlined as DescriptionOutlinedIcon } from '@material-ui/icons';
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
        <Paper variant='outlined' className={classes.publicationEntry}>
          <Grid container direction='column'>
            <Grid item>
              <DescriptionOutlinedIcon fontSize='large' />
            </Grid>
            <Grid item>
              <Typography
                component={Link}
                href={link}
                target='_blank'
                rel='noopener'
                variant='h6'
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' color='textSecondary'>
                {publisher}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>{`With: ${coauthors}`}</Typography>
            </Grid>
            <Grid item>
              <Typography dangerouslySetInnerHTML={{ __html: html }} />
            </Grid>
            <Grid item>
              <Link href={link} target='_blank' rel='noopener'>
                View
              </Link>
            </Grid>
          </Grid>
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

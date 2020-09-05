import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Grid, Link, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SectionLayout from './sectionLayout';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(2),
  },
  imageContainer: {
    height: '50px',
    width: '50px',
    marginBottom: theme.spacing(1),
  },
  educationEntry: {
    padding: theme.spacing(2),
  },
}));

const Education = (props) => {
  const classes = useStyles();
  const { data } = props;

  const renderEducationEntry = (node, index) => {
    const { html, frontmatter } = node;
    const { institution, degree, range, link, image } = frontmatter;
    const allocatedSize = Math.max(4, 12 / data.length);
    return (
      <Grid item key={index} xs={12} sm={allocatedSize}>
        <Paper elevation={5}>
          <Grid container direction='column' className={classes.educationEntry}>
            <Grid item xs={12}>
              <Link href={link} target='_blank' rel='noopener'>
                <div className={classes.imageContainer}>
                  <Img fluid={image.childImageSharp.fluid} alt={institution} />
                </div>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>{degree}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Link href={link}>
                <Typography variant='subtitle1'>{institution}</Typography>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle1' color='textSecondary'>
                {range}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography dangerouslySetInnerHTML={{ __html: html }} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  };

  return (
    <SectionLayout id={navigationConstants.education.id}>
      <Typography
        variant='h3'
        color='primary'
        style={{ display: 'inline-block' }}
      >
        Highlights of my{' '}
        <Typography
          variant='h3'
          color='secondary'
          style={{ display: 'inline-block' }}
        >
          education
        </Typography>
      </Typography>
      <Grid container spacing={2} className={classes.content}>
        {data.map(({ node }, index) => renderEducationEntry(node, index))}
      </Grid>
    </SectionLayout>
  );
};

Education.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Education;

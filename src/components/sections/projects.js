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
    marginBottom: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  projectEntry: {
    padding: theme.spacing(2),
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const { data } = props;

  const renderProjectEntry = (node, projectIndex) => {
    const { html, frontmatter } = node;
    const { title, tech, link, image } = frontmatter;
    const allocatedSize = Math.max(4, 12 / data.length);

    const renderTech = () => {
      return (
        <>
          <Typography variant='subtitle1'>Tech</Typography>
          <ul>
            {tech.map((techEntry, techIndex) => {
              return <li key={techIndex}>{techEntry}</li>;
            })}
          </ul>
        </>
      );
    };

    return (
      <Grid item key={projectIndex} xs={12} sm={allocatedSize}>
        <Paper elevation={5} className={classes.projectEntry}>
          <div className={classes.imageContainer}>
            <Img
              fluid={image.childImageSharp.fluid}
              alt={title}
              imgStyle={{ objectFit: 'contain' }}
              className={classes.image}
            />
          </div>
          <Typography
            component={Link}
            href={link}
            target='_blank'
            rel='noopener'
            variant='h6'
          >
            {title}
          </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
          {renderTech()}
          <Link href={link} target='_blank' rel='noopener'>
            View
          </Link>
        </Paper>
      </Grid>
    );
  };

  return (
    <SectionLayout id={navigationConstants.projects.id}>
      <Typography
        variant='h3'
        color='primary'
        style={{ display: 'inline-block' }}
      >
        Some interesting{' '}
        <Typography
          variant='h3'
          color='secondary'
          style={{ display: 'inline-block' }}
        >
          projects
        </Typography>{' '}
        I've done
      </Typography>
      <Grid container spacing={2} className={classes.content}>
        {data.map(({ node }, index) => renderProjectEntry(node, index))}
      </Grid>
    </SectionLayout>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;

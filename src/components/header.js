import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import MobileDrawer from './mobileDrawer';
import navigationConstants from 'constants/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  grow: {
    flexGrow: 1,
  },
  imageContainer: {
    width: '50px',
  },
  navButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setMobileDrawerOpen(true);
  const handleDrawerClose = () => setMobileDrawerOpen(false);

  const renderLogo = () => {
    return (
      <StaticQuery
        query={graphql`
          {
            imageNode: allFile(
              filter: { absolutePath: { regex: "/logo.png/" } }
            ) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          console.log(data.imageNode);
          return (
            <Link href='/'>
              <div className={classes.imageContainer}>
                <Img
                  fluid={data.imageNode.edges[0].node.childImageSharp.fluid}
                />
              </div>
            </Link>
          );
        }}
      />
    );
  };

  const renderNavigationButtons = () => {
    return Object.values(navigationConstants).map((navData, index) => {
      return (
        <Button
          key={index}
          component={Link}
          href={`/#${navData.id}`}
          className={classes.navButton}
        >
          {navData.name}
        </Button>
      );
    });
  };

  return (
    <>
      <AppBar position='static' elevation={0} className={classes.root}>
        <Toolbar>
          {renderLogo()}
          <div className={classes.grow} />
          {renderNavigationButtons()}
          <IconButton onClick={handleDrawerOpen} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileDrawer open={mobileDrawerOpen} onClose={handleDrawerClose} />
    </>
  );
};

export default Header;

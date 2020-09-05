import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { CssBaseline } from '@material-ui/core';

import Footer from 'components/Footer';
import Head from 'components/head';
import Header from 'components/header';
import ThemeWrapper from 'components/themeWrapper';

const Layout = (props) => {
  const { children } = props;

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <div>
          <ThemeWrapper>
            <CssBaseline />
            <Head metadata={site.siteMetadata} />
            <Header />
            {children}
            <Footer />
          </ThemeWrapper>
        </div>
      )}
    />
  );
};

export default Layout;

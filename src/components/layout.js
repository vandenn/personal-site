import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Head from 'components/head';
import Header from 'components/header';

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
          <Head metadata={site.siteMetadata} />
          <Header />
          {children}
        </div>
      )}
    />
  );
};

export default Layout;

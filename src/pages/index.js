import React from 'react';
import { graphql } from 'gatsby';

import Hero from 'components/sections/hero';

const Home = (props) => {
  const { data } = props;
  return (
    <div>
      <Hero data={data.hero.edges} />
    </div>
  );
};

export default Home;

export const query = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            buttonText
            subtitle
            specialties
          }
        }
      }
    }
  }
`;

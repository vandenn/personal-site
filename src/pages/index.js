import React from 'react';
import { graphql } from 'gatsby';

import About from 'components/sections/about';
import Contact from 'components/sections/contact';
import Hero from 'components/sections/hero';

const Home = (props) => {
  const { data } = props;
  return (
    <div>
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Contact data={data.contact.edges} />
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
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            avatar {
              childImageSharp {
                fixed(width: 400, quality: 100) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
      }
    }
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            buttonText
          }
        }
      }
    }
  }
`;

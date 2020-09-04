import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import About from 'components/sections/about';
import Contact from 'components/sections/contact';
import Education from 'components/sections/education';
import Experience from 'components/sections/experience';
import Hero from 'components/sections/hero';
import Projects from 'components/sections/projects';
import Publications from 'components/sections/publications';

const Home = (props) => {
  const { data } = props;
  return (
    <Layout>
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Experience data={data.experience.edges} />
      <Education data={data.education.edges} />
      <Publications data={data.publications.edges} />
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
    </Layout>
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
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            company
            title
            range
          }
        }
      }
    }
    education: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/education/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            institution
            degree
            range
            link
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
    publications: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/publications/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            coauthors
            publisher
            link
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            tech
            link
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

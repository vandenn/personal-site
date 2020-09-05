const path = require('path');
const constants = require('./src/constants/common');
const colorConstants = require('./src/constants/colors');

module.exports = {
  siteMetadata: {
    title: constants.siteTitle,
    description: constants.siteDescription,
    siteUrl: constants.siteUrl,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'EvanLivelo',
        short_name: 'EvanLivelo',
        start_url: '/',
        background_color: colorConstants.backgroundDefault,
        theme_color: colorConstants.primary,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Roboto Mono', 'Source Sans Pro'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        constants: path.join(__dirname, 'src/constants'),
        images: path.join(__dirname, 'src/images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};

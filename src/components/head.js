import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import constants from 'constants/common';
import colorConstants from 'constants/colors';
import favicon from 'images/favicon.ico';
import ogImage from 'images/og.png';

const Head = (props) => {
  const { metadata } = props;

  return (
    <Helmet>
      <html lang='en' prefix='og: http://ogp.me/ns#' />
      <title itemProp='name' lang='en'>
        {metadata.title}
      </title>
      <link rel='shortcut icon' href={favicon} />

      <meta name='description' content={metadata.description} />
      <meta name='keywords' content={constants.siteKeywords} />
      <meta property='og:title' content={metadata.title} />
      <meta property='og:description' content={metadata.description} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={metadata.siteUrl} />
      <meta property='og:site_name' content={metadata.title} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='627' />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:locale' content={constants.siteLanguage} />
      <meta itemProp='name' content={metadata.title} />
      <meta itemProp='description' content={metadata.description} />
      <meta itemProp='image' content={ogImage} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={metadata.siteUrl} />
      <meta name='twitter:title' content={metadata.title} />
      <meta name='twitter:description' content={metadata.description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:image:alt' content={metadata.title} />

      <meta name='msapplication-TileColor' content={colorConstants.primary} />
      <meta name='theme-color' content={colorConstants.primary} />
    </Helmet>
  );
};

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Head;

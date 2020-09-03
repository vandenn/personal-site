import React from 'react';
import { Grid } from '@material-ui/core';

import SocialButton from './socialButton';
import socialConstants from 'constants/social';

const SocialButtonGroup = (props) => {
  const renderSocialButtons = () => {
    console.log(socialConstants);
    return Object.values(socialConstants).map((socialEntry, index) => {
      return (
        <Grid item key={index}>
          <SocialButton name={socialEntry.name} url={socialEntry.url} />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      {renderSocialButtons()}
    </Grid>
  );
};

export default SocialButtonGroup;

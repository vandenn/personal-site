import React from 'react';

import constants from 'constants/common';

const Footer = (props) => {
  return (
    <center>
      <a href={`${constants.github}`}>Built by {constants.name}</a>
    </center>
  );
};

export default Footer;

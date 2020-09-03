import React from 'react';

import navigationConstants from 'constants/navigation';

const Header = (props) => {
  const renderNavigationLinks = () => {
    return Object.values(navigationConstants).map((navData, index) => {
      return (
        <li
          key={index}
          style={{ display: 'inline-block', marginRight: '1rem' }}
        >
          <a href={`/#${navData.id}`}>{navData.name}</a>
        </li>
      );
    });
  };

  return (
    <header style={{ marginBottom: '1.5rem' }}>
      <a href='/'>
        <h2 style={{ display: 'inline' }}>Evan Livelo</h2>
      </a>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        {renderNavigationLinks()}
      </ul>
    </header>
  );
};

export default Header;

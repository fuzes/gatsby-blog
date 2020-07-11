import { Link } from 'gatsby';
import React from 'react';

interface HeaderProps {
  siteTitle: string;
}

const headerStyle = {
  background: 'rebeccapurple',
  marginBottom: '1.45rem',
};

function Header({ siteTitle }: HeaderProps) {
  return (
    <header style={headerStyle}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;

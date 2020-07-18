import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { LogoContainer } from './style';

type LogoProps = {
  setNavbarOpen;
};

export default function Logo({ setNavbarOpen }: LogoProps): JSX.Element {
  return (
    <LogoContainer>
      <Link
        css={css`
          text-decoration: none;
          color: black;
        `}
        to="/"
        onClick={() => setNavbarOpen(false)}
      >
        <h3
          css={css`
            margin: 0;
            color: black;
            :hover {
              color: saddlebrown;
            }
          `}
        >
          fuzes blog
        </h3>
      </Link>
    </LogoContainer>
  );
}

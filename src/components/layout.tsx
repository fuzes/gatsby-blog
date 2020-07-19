/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import './layout.css';
import { css } from '@emotion/core';
import Header from './header';
import LeftPanel from './LeftPanel';

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 4vh;
  display: flex;
  flex-direction: row;
  width: 90vw;
  @media (max-width: 768px) {
    padding: 3vh 6vh;
    flex-direction: column;
    width: 100vw;
  }
`;

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <LayoutContainer>
        <LeftPanel />
        <main
          css={css`
            flex: 1 0 auto;
          `}
        >
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}
, Built with
<a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </LayoutContainer>
    </>
  );
}

export default Layout;

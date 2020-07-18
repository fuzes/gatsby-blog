/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import './layout.css';
import Header from './header';

const StyledLayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.45rem 1.0875rem;
`;

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <StyledLayoutContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
, Built with
<a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </StyledLayoutContainer>
    </>
  );
}

export default Layout;

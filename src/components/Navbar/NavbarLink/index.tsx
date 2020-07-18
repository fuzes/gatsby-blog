import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledNavItem = styled(Link)`
  margin-right: 2vw;
  text-decoration: none;
  color: black;
  :hover {
    color: saddlebrown;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1vh;
  }
`;

function NavbarLinks(): JSX.Element {
  return (
    <>
      <StyledNavItem to="/">About</StyledNavItem>
      <StyledNavItem to="/404">Blog</StyledNavItem>
    </>
  );
}

export default NavbarLinks;

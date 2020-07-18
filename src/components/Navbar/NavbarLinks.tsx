import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledNavItem = styled(Link)`
  margin-right: 10px;
`;

function NavbarLinks() {
  return (
    <>
      <StyledNavItem to="/">About</StyledNavItem>
      <StyledNavItem to="/404">Blog</StyledNavItem>
    </>
  );
}

export default NavbarLinks;

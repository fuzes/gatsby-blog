import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  background: darkcyan;
  margin-bottom: 0.5rem;
`;

const StyledHeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const StyledH1 = styled.h1`
  margin: 0;
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

interface HeaderProps {
  siteTitle: string;
}

function Header({ siteTitle }: HeaderProps) {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledH1>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </StyledH1>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

export default Header;

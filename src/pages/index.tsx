import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const StyledImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StyledImageContainer>
        <Image />
      </StyledImageContainer>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
    </Layout>
  );
}

export default IndexPage;

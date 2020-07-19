import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import { ProfileContainer } from './style';

export default function Profile(): JSX.Element {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "profile/avatar.jpeg" }) {
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <ProfileContainer>
          <Img
            css={css`
              border-radius: 50%;
              align-self: center;
              margin-bottom: 16px;
            `}
            fixed={data.file.childImageSharp.fixed}
          />
          <h3>test</h3>
        </ProfileContainer>
      )}
    />
  );
}

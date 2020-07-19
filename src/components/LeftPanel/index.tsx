import React from 'react';
import { LeftPanelContainer } from './style';
import Profile from '../Profile';
import { css } from '@emotion/core';

function LeftPanel(): JSX.Element {
  return (
    <LeftPanelContainer>
      <Profile />
      <h1 css={css`display: flex`}>test</h1>
    </LeftPanelContainer>
  );
}

export default LeftPanel;

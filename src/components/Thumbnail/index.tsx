import React from 'react';
import { css } from '@emotion/core';
import { ThumbnailContainer } from './style';

function Thumbnail(): JSX.Element {
  return (
    <ThumbnailContainer>
      <div>썸네일이 위치할 자리입니다.</div>
      <div>github 주소와 link가 위치합니다.</div>
      테스트
    </ThumbnailContainer>
  );
}

export default Thumbnail;

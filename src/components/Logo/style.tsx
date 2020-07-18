import styled from '@emotion/styled';

const LogoContainer = styled('div')`
  margin: auto 0;
  flex: 0 0 auto;
  font-size: 24px;
  box-sizing: content-box;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 1 1 24px;
    font-size: 16px;
  }
`;

export { LogoContainer };

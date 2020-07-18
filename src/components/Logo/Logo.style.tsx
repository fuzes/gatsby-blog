import styled from '@emotion/styled';

const LogoContainer = styled('div')`
  margin: auto 0;
  flex: 1 1 36px;
  font-size: 24px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 1 1 24px;
    font-size: 16px;
  }
`;

export { LogoContainer };

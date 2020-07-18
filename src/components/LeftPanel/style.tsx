import styled from '@emotion/styled';

const LeftPanelContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 0 0 32vh;
  justify-content: center;
  margin-right: 8vh;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export { LeftPanelContainer };

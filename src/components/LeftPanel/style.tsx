import styled from '@emotion/styled';

const LeftPanelContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 0 0 32vh;
  justify-content: center;
  margin-right: 8vh;
  border: solid red 2px;
  @media (max-width: 768px) {
    margin-right: 0;
    flex: auto;
  }
`;

export { LeftPanelContainer };

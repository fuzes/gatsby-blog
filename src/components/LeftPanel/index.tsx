import React from 'react';
import { LeftPanelContainer } from './style';
import Thumbnail from '../Thumbnail';

function LeftPanel(): JSX.Element {
  return <LeftPanelContainer><Thumbnail/></LeftPanelContainer>;
}

export default LeftPanel;
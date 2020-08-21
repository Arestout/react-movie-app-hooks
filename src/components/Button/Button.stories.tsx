import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from './Button';
import './Button.styles.scss';

export default {
  title: 'Buttons',
  decorators: [withKnobs],
};

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '500px',
};

export const ButtonStates = () => (
  <div style={styles}>
    <Button className="btn mr" label="Default Button" />,
    <Button className="btn __hover mr" label="Button on hover" />,
    <Button className="btn __active mr" label="Button on click" />,
  </div>
);

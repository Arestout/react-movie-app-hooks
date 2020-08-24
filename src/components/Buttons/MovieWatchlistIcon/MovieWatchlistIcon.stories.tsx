import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { MovieWatchlistIcon } from './MovieWatchlistIcon';
import '../Buttons.styles.scss';

export default {
  title: 'Buttons/MovieWatchlistIcon',
  decorators: [withKnobs],
};

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '500px',
};

export const ButtonStates = (): unknown => (
  <div style={styles}>
    <MovieWatchlistIcon />,
  </div>
);

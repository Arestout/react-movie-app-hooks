import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { MovieFavoriteIcon } from './MovieFavoriteIcon';
import '../Buttons.styles.scss';

export default {
  title: 'Buttons/MovieFavoriteIcon',
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
    <MovieFavoriteIcon />,
  </div>
);

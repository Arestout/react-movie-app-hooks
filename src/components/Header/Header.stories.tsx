import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Header } from './Header';

export default {
  title: 'Header',
  decorators: [withKnobs],
};

export const defaultHeader = () => <Header />;

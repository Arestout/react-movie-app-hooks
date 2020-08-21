import 'loki/configure-react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';

const styles = {
  width: '100%',
  minHeight: '500px',
  background: '#463A3A',
  padding: '2em',
};

addDecorator(withPropsTable);
addDecorator((story) => (
  <div style={styles}>
    <BrowserRouter>{story()}</BrowserRouter>
  </div>
));

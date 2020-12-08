import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './Button';
import './Button.styles.scss';

describe('Button', () => {
  it('should render a button', () => {
    expect(
      renderer
        .create(
          <Button type="button" className="btn" label="Button">
            Button
          </Button>
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});

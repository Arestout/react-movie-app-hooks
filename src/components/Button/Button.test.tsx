import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { Button } from './Button';
import './Button.styles.scss';

describe('Button', () => {
  it('should render a button', () => {
    expect(
      renderer
        .create(
          <Button className="btn" label="Button">
            Button
          </Button>
        )
        .toJSON()
    ).toMatchSnapshot();
  });


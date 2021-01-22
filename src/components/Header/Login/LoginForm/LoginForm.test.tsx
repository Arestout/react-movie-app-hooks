import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';

import { LoginForm } from './LoginForm';
import { USERNAME, PASSWORD } from 'config';

const mockStore = configureMockStore([]);

describe('LoginForm render', () => {
  let wrapper;

  beforeEach(() => {
    const store = mockStore({
      auth: { user: null },
    });

    wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </MemoryRouter>
    );
  });

  it('should show form initially', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should have a password input field', () => {
    expect(wrapper.containsMatchingElement(<input type="password" />)).toBe(
      true
    );
  });

  it('has a username input field', () => {
    expect(wrapper.containsMatchingElement(<input name="username" />)).toBe(
      true
    );
  });

  it('should have a login button', () => {
    expect(
      wrapper.containsMatchingElement(<button type="submit">Login</button>)
    ).toBe(true);
  });
});

describe('LoginForm on submit', () => {
  let wrapper;

  beforeEach(() => {
    const store = mockStore({
      auth: { user: null },
    });

    wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </MemoryRouter>
    );
  });

  it('should show an error for username with invalid username', () => {
    act(() => {
      wrapper
        .find('input[type="text"]')
        .simulate('change', { target: { name: 'username', value: 'test' } });
      wrapper
        .find('input[type="password"]')
        .simulate('change', { target: { name: 'password', value: PASSWORD } });
    });
    wrapper.find('button').simulate('click');

    expect(wrapper.find('.error-feedback').length).toEqual(1);
  });

  it('should show an error for password with invalid password', () => {
    act(() => {
      wrapper
        .find('input[type="text"]')
        .simulate('change', { target: { name: 'username', value: USERNAME } });
      wrapper
        .find('input[type="password"]')
        .simulate('change', { target: { name: 'password', value: 'test' } });
    });
    wrapper.find('button').simulate('click');

    expect(wrapper.find('.error-feedback').length).toEqual(1);
  });

  // it('should show no errors with valid credentials', () => {
  //   wrapper
  //     .find('input[type="text"]')
  //     .simulate('change', { target: { name: 'username', value: USERNAME } });
  //   wrapper
  //     .find('input[type="password"]')
  //     .simulate('change', { target: { name: 'password', value: PASSWORD } });

  //   wrapper.find('button').simulate('click');
  //   console.log({ USERNAME, PASSWORD });
  //   console.log(wrapper.html());
  //   expect(wrapper.find('.error-feedback').length).toEqual(0);
  // });
});

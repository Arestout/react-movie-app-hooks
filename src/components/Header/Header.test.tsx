import React from 'react';
import { Header } from './Header';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore([]);

describe('App', () => {
  it('should show Login button by default', () => {
    const store = mockStore({
      auth: { user: null },
    });
    const header = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    );

    expect(header.html()).toContain(
      '<button type="button" class="btn header__btn">Login</button>'
    );
  });

  it('should not show Login button for authorized user', () => {
    const store = mockStore({
      auth: { user: { avatar: { gravatar: { hash: '' } } } },
    });
    const header = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    expect(header.html()).not.toContain(
      '<button type="button" class="btn header__btn">Login</button>'
    );
  });
});

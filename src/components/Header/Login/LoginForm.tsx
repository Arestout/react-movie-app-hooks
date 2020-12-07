import React, { useState } from 'react';

import { CallApi } from 'api/api';
import { UIInput } from 'components/Form/UIInput';
import { useAuth } from 'hooks/useAuth';

export const LoginForm: React.FC = () => {
  interface ILoginFormState {
    username: string;
    password: string;
    submitting: boolean;
    errors: Errors;
  }

  interface Errors {
    username?: string;
    password?: string;
    base?: string | null;
  }

  const initialState: ILoginFormState = {
    username: '',
    password: '',
    errors: {},
    submitting: false,
  };

  const [loginState, setLoginState] = useState(initialState);
  const { dispatchLoginModal, dispatchUpdateAuth } = useAuth();

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginState({
      ...loginState,
      [name]: value,
      errors: {
        ...loginState.errors,
        base: null,
        [name]: null,
      },
    });
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const errors = validateFields();
    const error = errors[name];

    if (error) {
      setLoginState({
        ...loginState,
        errors: {
          ...loginState.errors,
          [name]: error,
        },
      });
    }
  };

  const validateFields = () => {
    const errors: Errors = {};
    const { username, password } = loginState;

    if (username === '') {
      errors.username = 'Should not be empty';
    }

    if (password.length === 0) {
      errors.password = 'Should not be empty';
    }

    return errors;
  };

  const onSubmit = async () => {
    setLoginState({
      ...loginState,
      submitting: true,
    });

    try {
      const { request_token } = await CallApi.get('/authentication/token/new');
      await CallApi.post('/authentication/token/validate_with_login', {
        body: {
          username: loginState.username,
          password: loginState.password,
          request_token,
        },
      });
      const { session_id } = await CallApi.post('/authentication/session/new', {
        body: {
          request_token,
        },
      });
      const user = await CallApi.get('/account', {
        params: {
          session_id,
        },
      });

      setLoginState({
        ...loginState,
        submitting: false,
      });
      dispatchUpdateAuth({ user, session_id });
      dispatchLoginModal();
    } catch (error) {
      setLoginState({
        ...loginState,
        submitting: false,
        errors: {
          base: error.status_message,
        },
      });
    }
  };

  const onLogin = (e) => {
    e.preventDefault();
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setLoginState({
        ...loginState,
        errors: {
          ...loginState.errors,
          ...errors,
        },
      });
    } else {
      onSubmit();
    }
  };

  const { username, password, errors, submitting } = loginState;
  return (
    <div className="form-login-container">
      <form className="form-login">
        <h1 className="h3 mb-3 font-weight-normal text-center">Log in</h1>
        <UIInput
          type="text"
          id="username"
          placeholder="Username"
          labelText="Username"
          name="username"
          value={username}
          onChange={onChange}
          onBlur={handleBlur}
          error={errors.username ?? ''}
        />

        <UIInput
          type="password"
          id="password"
          placeholder="Password"
          labelText="Password"
          name="password"
          value={password}
          onChange={onChange}
          onBlur={handleBlur}
          error={errors.password ?? ''}
        />

        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          onClick={onLogin}
          disabled={submitting}
        >
          Log in
        </button>
        {errors.base && (
          <div className="invalid-feedback text-center">{errors.base}</div>
        )}
      </form>
    </div>
  );
};

import React, { useState } from 'react';

import { UIInput } from 'components/Form/UIInput';
import { useAuth } from 'hooks/useAuth';
import { Button } from 'components/Buttons/Button';

import './LoginForm.styles.scss';

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

const BASE_ERROR = 'You should provide a username and a password';

export const LoginForm: React.FC = () => {
  const [loginState, setLoginState] = useState(initialState);
  const { dispatchLoginModal, dispatchFetchAuthOnLogin } = useAuth();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
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

    if (password === '') {
      errors.password = 'Should not be empty';
    }

    return errors;
  };

  const onSubmit = async () => {
    setLoginState({
      ...loginState,
      submitting: true,
    });

    // TODO
    try {
      dispatchFetchAuthOnLogin({
        username: loginState.username,
        password: loginState.password,
      });
      setLoginState({
        ...loginState,
        submitting: false,
      });
      dispatchLoginModal();
    } catch (error) {
      setLoginState({
        ...loginState,
        submitting: false,
        errors: {
          base: BASE_ERROR,
        },
      });
    }
  };

  const onLogin = (e: React.FormEvent<HTMLButtonElement>) => {
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
    <div className="form-login-container form-wrapper">
      <form className="form-login">
        <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
        <UIInput
          type="text"
          id="username"
          placeholder="Username"
          labelText="Username (Hextus)"
          name="username"
          value={username}
          onChange={onChange}
          onBlur={handleBlur}
          error={errors.username ?? ''}
          className={'login-form__input'}
          classNameLabel={'login-form__label'}
        />

        <UIInput
          type="password"
          id="password"
          placeholder="Password"
          labelText="Password (moviepass)"
          name="password"
          value={password}
          onChange={onChange}
          onBlur={handleBlur}
          error={errors.password ?? ''}
          className={'login-form__input'}
          classNameLabel={'login-form__label'}
        />

        <Button
          type="submit"
          className="login-form__btn"
          onClick={onLogin}
          disabled={submitting}
          label="Login"
        />

        {errors.base && (
          <div className="error-feedback text-center">{errors.base}</div>
        )}
      </form>
    </div>
  );
};

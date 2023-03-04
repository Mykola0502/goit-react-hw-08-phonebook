import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { FormLogin, FormLoginLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLogin onSubmit={handleSubmit}>
      <FormLoginLabel>
        Email
        <input type="email" name="email" />
      </FormLoginLabel>
      <FormLoginLabel>
        Password
        <input type="password" name="password" />
      </FormLoginLabel>
      <button type="submit">Log In</button>
    </FormLogin>
  );
};

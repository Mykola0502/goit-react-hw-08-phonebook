import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import { FormLogin, FormLoginLabel, Input, LoginBtn } from './LoginForm.styled';

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
        <Input type="email" name="email" placeholder="Enter email" />
      </FormLoginLabel>
      <FormLoginLabel>
        Password
        <Input type="password" name="password" placeholder="Enter password" />
      </FormLoginLabel>
      <LoginBtn type="submit">Log In</LoginBtn>
    </FormLogin>
  );
};

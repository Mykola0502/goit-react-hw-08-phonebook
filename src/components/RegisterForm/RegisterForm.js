import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';
import {
  FormRegister,
  FormRegisterLabel,
  Input,
  RegisterBtn,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit}>
      <FormRegisterLabel>
        Username <Input type="text" name="name" placeholder="Enter username" />
      </FormRegisterLabel>
      <FormRegisterLabel>
        Email <Input type="email" name="email" placeholder="Enter email" />
      </FormRegisterLabel>
      <FormRegisterLabel>
        Password{' '}
        <Input type="password" name="password" placeholder="Enter password" />
      </FormRegisterLabel>
      <RegisterBtn type="submit">Register</RegisterBtn>
    </FormRegister>
  );
};

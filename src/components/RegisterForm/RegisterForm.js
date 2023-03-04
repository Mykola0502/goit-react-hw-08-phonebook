import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { FormRegister, FormRegisterLabel } from './RegisterForm.styled';

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
        Username <input type="text" name="name" />
      </FormRegisterLabel>
      <FormRegisterLabel>
        Email <input type="email" name="email" />
      </FormRegisterLabel>
      <FormRegisterLabel>
        Password <input type="password" name="password" />
      </FormRegisterLabel>
      <button type="submit">Register</button>
    </FormRegister>
  );
};

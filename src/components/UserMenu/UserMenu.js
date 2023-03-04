import { useAuth } from 'hooks';

import { Wrapper, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth;

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button">Logout</button>
    </Wrapper>
  );
};

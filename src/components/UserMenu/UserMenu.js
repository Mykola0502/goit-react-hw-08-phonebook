import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { Wrapper, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </Wrapper>
  );
};

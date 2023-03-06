import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { Wrapper, UserName, UserBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <UserBtn type="button" onClick={handleLogOut}>
        Logout
      </UserBtn>
    </Wrapper>
  );
};

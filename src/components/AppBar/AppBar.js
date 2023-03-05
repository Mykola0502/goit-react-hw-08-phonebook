import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  // console.log(isLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

/**
 *
 */
// // import { Navigation } from '../Navigation/Navigation';
// // import { UserMenu } from '../UserMenu/UserMenu';
// // import { AuthNav } from '../AuthNav/AuthNav';
// // import { useAuth } from 'hooks';
// // import css from './AppBar.module.css';

// export const AppBar = () => {
//   //   const { isLoggedIn } = useAuth();

//   return (
//     <header>
//       {/* <Navigation /> */}
//       {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
//     </header>
//   );
// };

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { AppBar } from 'components/AppBar';
import { LayoutWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </LayoutWrapper>
  );
};

/**
 *
 */
// import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from 'components/AppBar';
// import { Suspense } from 'react';

// export const Layout = () => {
//   return (
//     <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
//       <AppBar />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//       <Toaster position="top-right" reverseOrder={false} />
//     </div>
//   );
// };

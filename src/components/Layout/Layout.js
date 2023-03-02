import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <h1>Layout</h1>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
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
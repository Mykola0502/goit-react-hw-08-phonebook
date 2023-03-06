import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { AppBar } from 'components/AppBar';
import { Loader } from 'components/Loader';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Toaster position="top-center" reverseOrder={false} />
      </Container>
    </div>
  );
};

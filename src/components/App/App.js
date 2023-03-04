import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';

import HomePage from 'pages/Home';
import RegisterPage from 'pages/Register';
import LoginPage from 'pages/Login';
import ContactsPage from 'pages/Contacts';
import NotFound from 'pages/NotFound ';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

// import { lazy, useEffect } from 'react';
// import { Toaster } from 'react-hot-toast';
// import { useSelector, useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';

// import { fetchContacts } from 'redux/operations';
// import {
//   selectContacts,
//   selectIsLoading,
//   selectError,
//   selectFilter,
// } from 'redux/selectors';
// import { ContactForm } from 'components/ContactForm';
// import { ContactList } from 'components/ContactList';
// import { Filter } from 'components/Filter';
// import { Loader } from 'components/Loader';
// import { Layout } from 'components/Layout';

// import { Container, Title, SubTitle, ContactText } from './App.styled';

// const HomePage = lazy(() => import('pages/Home'));
// // const RegisterPage = lazy(() => import('pages/Register'));
// // const LoginPage = lazy(() => import('pages/Login'));
// // const TasksPage = lazy(() => import('pages/Tasks'));

// export const App = () => {
//   // const dispatch = useDispatch();
//   // const items = useSelector(selectContacts);
//   // const isLoading = useSelector(selectIsLoading);
//   // const error = useSelector(selectError);
//   // const filter = useSelector(selectFilter);

//   // useEffect(() => {
//   //   dispatch(fetchContacts());
//   // }, [dispatch]);

//   return (
//     <Container>
//       <Toaster position="top-center" reverseOrder={false} />

//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           {/* <Route
//             path="/register"
//             element={
//               <RestrictedRoute
//                 redirectTo="/tasks"
//                 component={<RegisterPage />}
//               />
//             }
//           /> */}
//           {/* <Route
//             path="/login"
//             element={
//               <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//             }
//           /> */}
//           {/* <Route
//             path="/tasks"
//             element={
//               <PrivateRoute redirectTo="/login" component={<TasksPage />} />
//             }
//           /> */}
//         </Route>
//       </Routes>

//       <Title>Phonebook</Title>
//       {/* <ContactForm /> */}
//       <SubTitle>Contacts</SubTitle>
//       {/* {error && <p>{error}</p>} */}
//       {/* {items.length || filter ? (
//         <>
//           <Filter />
//           {isLoading && !error && <Loader />}
//           <ContactList />
//         </>
//       ) : (
//         <ContactText>There are no phone numbers in Contacts!</ContactText>
//       )} */}
//     </Container>
//   );
// };

/**
 *
 *
 */

// import { useEffect } from 'react';
// import { Toaster } from 'react-hot-toast';
// import { useSelector, useDispatch } from 'react-redux';

// import { fetchContacts } from 'redux/operations';
// import {
//   selectContacts,
//   selectIsLoading,
//   selectError,
//   selectFilter,
// } from 'redux/selectors';
// import { ContactForm } from 'components/ContactForm';
// import { ContactList } from 'components/ContactList';
// import { Filter } from 'components/Filter';
// import { Loader } from 'components/Loader';

// import { Container, Title, SubTitle, ContactText } from './App.styled';

// export const App = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const filter = useSelector(selectFilter);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <Toaster position="top-center" reverseOrder={false} />
//       <Title>Phonebook</Title>
//       <ContactForm />
//       <SubTitle>Contacts</SubTitle>
//       {error && <p>{error}</p>}
//       {items.length || filter ? (
//         <>
//           <Filter />
//           {isLoading && !error && <Loader />}
//           <ContactList />
//         </>
//       ) : (
//         <ContactText>There are no phone numbers in Contacts!</ContactText>
//       )}
//     </Container>
//   );
// };

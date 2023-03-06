import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useContacts } from 'hooks';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const { items } = useContacts();
  const { isLoading } = useContacts();
  const { error } = useContacts();
  const { filter } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      {error && <p>{error}</p>}
      {items.length || filter ? (
        <>
          <Filter />
          {isLoading && !error && <Loader />}
          {!isLoading && !error && <ContactList />}
        </>
      ) : (
        <p style={{ color: '#330101', fontSize: '20px', fontWeight: '500' }}>
          There are no phone numbers in Contacts!
        </p>
      )}
    </>
  );
};

export default Contacts;

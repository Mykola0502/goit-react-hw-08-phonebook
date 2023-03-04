import { Helmet } from 'react-helmet';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;

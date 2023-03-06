import { useContacts } from 'hooks';
import { ContactItem } from 'components/ContactItem';
import { FilterText, List } from './ContactList.styled';

export const ContactList = () => {
  const { filter } = useContacts();
  const { visibleContacts } = useContacts();

  return visibleContacts.length ? (
    <>
      <List>
        {visibleContacts
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(contact => (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          ))}
      </List>
    </>
  ) : (
    <>
      <FilterText>No matches found for "{filter}"!</FilterText>
    </>
  );
};

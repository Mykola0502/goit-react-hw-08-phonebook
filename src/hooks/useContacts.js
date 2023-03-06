import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);

  return { items, isLoading, error, filter, visibleContacts };
};

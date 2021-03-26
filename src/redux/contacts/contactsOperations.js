import axios from 'axios';
import contactsActions from './contactsActions';

axios.default.baseURL = 'http://localhost:4040';

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactsActions.fetchContactSuccess(data)))
    .catch(error => dispatch(contactsActions.fetchContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(({ data }) => dispatch(contactsActions.removeContactSuccess(data)))
    .catch(error => dispatch(contactsActions.removeContactError(error)));
};

export default { addContact, fetchContacts, removeContact };

import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactsById = createSelector(
  [(_, contactId) => contactId, getItems],
  (contactId, items) => {
    return items.find(item => item.id === contactId);
  },
);

export default {
  getItems,
  getFilter,
  getVisibleContacts,
  getContactsById,
};

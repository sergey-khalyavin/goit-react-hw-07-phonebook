import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import contactsSelectors from '../../redux/contacts/contactsSelectors';
import ContactListItem from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contacts.map(({ id }) => (
      <CSSTransition key={id} timeout={1000} classNames={styles} unmountOnExit>
        <ContactListItem key={id} id={id} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);

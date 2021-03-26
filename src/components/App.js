import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import contactsOperations from '../redux/contacts/contactsOperations';

import styles from './App.module.css';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className={styles.box}>
        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        <CSSTransition
          in={true}
          timeout={250}
          classNames={styles.filter}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsOperations from '../../redux/contacts/contactsOperations';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name"
          />
        </label>
        <label className={styles.label}>
          Number:
          <input
            className={styles.input}
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="Enter number"
          ></input>
        </label>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onAddContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);

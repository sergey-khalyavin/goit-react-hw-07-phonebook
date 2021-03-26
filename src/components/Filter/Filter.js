import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactsSelectors from '../../redux/contacts/contactsSelectors';
import contactsActions from '../../redux/contacts/contactsActions';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label className={styles.label}>
        Find contacts by name:
        <input
          className={styles.filter}
          placeholder="Enter name"
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import './ContactList.scss';

const ContactList = ({ contacts, deleteItem }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteItem: PropTypes.func.isRequired,
};

export default ContactList;

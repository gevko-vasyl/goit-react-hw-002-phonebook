import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, deleteItem }) => {
  return (
    <li className="ContactListItem">
      <p className="ContactListItem__text">{name}</p>
      <p className="ContactListItem__text">{number}</p>
      <button
        className="ContactListItem__button"
        onClick={() => deleteItem(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ContactListItem;

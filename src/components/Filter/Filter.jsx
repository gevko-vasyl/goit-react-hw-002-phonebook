import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <div className="Filter">
    <h2 className="Filter__contacts-title">Contacts</h2>
    <h3 className="Filter__title">Find contacts by name</h3>
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

import './Container.scss';

const Container = ({ children }) => {
  return (
    <div className="Container">
      <h1 className="Container__title">Phonebook</h1>
      {children}
    </div>
  );
};

export default Container;

import { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import ContactForm from './components/ContactFrom';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = { id: shortid.generate(), name: name, number: number };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  preventDuplicateContacs = (name, number) => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(contact => {
      contact.name.includes(name) && alert(`${name} is already in contacts.`);
      return contact.name.includes(name);
    });
    filteredContacts.length !== 1 && this.addContact(name, number);
  };

  renderByFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    return (
      <Container>
        <ContactForm onSubmit={this.preventDuplicateContacs} />

        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.renderByFilter()}
          deleteItem={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;

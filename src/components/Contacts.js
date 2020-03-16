import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    
    state = {
          contacts: [
            {
              id: 1,
              name: "John Doe",
              email: "jide@gmail.com",
              phone: "08109526245"
            },
            {
              id: 2,
              name: "Francy Ana",
              email: "francy@gmail.com",
              phone: "08109526567"
            },
            {
              id: 3,
              name: "Chioma B",
              email: "chiomab@gmail.com",
              phone: "08109526123"
            }
          ]
        };

          deleteContact = (id) => {
              const { contacts } = this.state;

              const newContacts = contacts.filter(contact => 
                contact.id !== id);

                this.setState({
                  contacts: newContacts
                });
          };

    render() {
        const { contacts } = this.state;

        return (
          
            <React.Fragment>
                {contacts.map(contact => (
                <Contact 
                   key={contact.id}
                   contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
                ))}
            </React.Fragment>
        );
    }
  
}

export default Contacts;
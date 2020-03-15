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


    render() {
        const { contacts } = this.state;

        return (
          
            <React.Fragment>
                {contacts.map(contact => (
                <Contact 
                   key={contact.id}
                   contact={contact} deleteClickHandler={this.deleteContent} />
                ))}
            </React.Fragment>
        );
    }
  
}

export default Contacts;
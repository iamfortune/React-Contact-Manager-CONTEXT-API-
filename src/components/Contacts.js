import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
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
    }
    render() {
        const { contacts } = this.state;
        return (
          
            <div>
                {contacts.map(contact => (
                <Contact 
                 name={contact.name}
                 email={contact.email}
                 phone={contact.phone}
                 />
                ))}
            </div>
        )
    }
}

export default Contacts;
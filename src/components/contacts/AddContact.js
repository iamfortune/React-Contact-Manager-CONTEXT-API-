import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    
    render() {
        return (
            <div>
               <h1>Add Contact</h1> 
            </div>
        );
    }
}

export default AddContact;
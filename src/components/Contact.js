import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const { name, email, phone } = this.props;
        return (
            <div>
                <h4>{name}</h4>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
            </div>
        );
    }
}

export default Contact;
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    render() {
        const { contact } = this.props;
        return (
            <div className="card card-body mb-3">
                <h4>{contact.name}</h4>
                <ul className="list-group">
                <li className="list-group-item">Email: {contact.email}</li>
                <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.propsTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default Contact;
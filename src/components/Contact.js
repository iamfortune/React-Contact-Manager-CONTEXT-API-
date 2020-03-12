import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

Contact.propsTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default Contact;
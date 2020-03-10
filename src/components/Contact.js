import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <li>{this.props.email}</li>
                <li>{this.props.phone}</li>
            </div>
        );
    }
}

export default Contact;
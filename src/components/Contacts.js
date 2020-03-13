import React, { Component } from 'react'

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    name: 'John Doe',
                    email: 'jide@gmail.com',
                    phone: '08109526245'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Contacts;
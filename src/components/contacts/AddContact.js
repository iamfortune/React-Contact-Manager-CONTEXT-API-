import React, { Component } from 'react';
import { Consumer } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import TextinputGroup from '../layout/TextInputGroup';


class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();
       
        const { name, email, phone } = this.state;

        const newContact = {
          id: uuidv4(),
          name,
          email,
          phone
        };

        dispatch({type: 'ADD_CONTACT', payload: newContact});

        //clear state 
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                      <div className="carb mb-3">
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                          <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                           <TextinputGroup
                            label="Name"
                            name="name"
                            placeholder="Enter name..."
                            value={name}
                            onChange={this.onChange}
                        />

                         <TextinputGroup
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={this.onChange}
                        />
                         <TextinputGroup
                            label="Phone"
                            name="phone"
                            type="phone"
                            placeholder="333-3333-333"
                            value={phone}
                            onChange={this.onChange}
                        />
                            <input
                              type="submit"
                              value="Add Contact"
                              className="btn btn-light n  btn-block"
                            />
                          </form>
                        </div>
                      </div>
                    );
                }}
            </Consumer>
        )
    }
}

export default AddContact;
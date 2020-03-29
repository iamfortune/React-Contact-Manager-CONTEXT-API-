import React, { Component } from 'react';
import { Consumer } from '../../context';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    // submit method for form submit button
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        console.log(this.state);
    }

    // form submit method for input, this is used to update state as we type input
    onChange = e => this.setState({ [e.target.name]: 
    e.target.value}); 


    render() {
        const { name, email, phone } = this.state;

        return (
          <Consumer>
            {value => {
              const { dispatch } = value;
              return (
                <div className="card mb-3">
                  <div className="card-header">Add Contact</div>
                  <div className="card-body">
                    {/* form submit handler */}
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      {/* text input for name */}
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg"
                          placeholder="Enter Name..."
                          value={name}
                          onChange={this.onChange}
                        />
                      </div>
                      {/* Text input for email */}
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-lg"
                          placeholder="you@example.com"
                          value={email}
                          onChange={this.onChange}
                        />
                      </div>
                      {/* text input for phone */}
                      <div className="form-group">
                        <label htmlFor="phone">phone</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control form-control-lg"
                          placeholder="Enter Phone Number..."
                          value={phone}
                          onChange={this.onChange}
                        />
                      </div>
                      {/* Adding a submit button for the form */}
                      <input
                        type="submit"
                        value="Add Contact"
                        className="btn btn-light btn-block"
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
import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }


    render() {
        const { name, email, phone } = this.state;
        return (
          // mb-3 stands for margin bottom 3
          <div className="card mb-3">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
              <form>
                {/* text input for name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                    value={name}
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
                  />
                </div>
                {/* Adding a submit button for the form */}
                <input type="submit" value="Add Contact"
                className="btn btn-light btn-block"
                />
              </form>
            </div>
          </div>
        );
    }
}

export default AddContact;
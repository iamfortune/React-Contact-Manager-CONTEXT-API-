import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }


    render() {
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
                  />
                </div>
                {/* text input for phone */}
                <div className="form-group">
                  <label htmlFor="phone">phone</label>
                  <input
                    type="text"
                    name="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                  />
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default AddContact;
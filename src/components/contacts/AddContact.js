import React, { Component } from "react";

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }


  // submit method for form submit button
  onSubmit = e => {
    e.preventDefault();
  };

  static defaultProps = {
      name: 'Fred Smith',
      email: 'fred@yahoo.com',
      phone: '777777777'
  }

  render() {
    const { name, email, phone } = this.props;
    return (
      // mb-3 stands for margin bottom 3
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          {/* form submit handler */}
          <form onSubmit={this.onSubmit}>
            {/* text input for name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                defaultValue={name}
                ref={this.nameInput}
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
                defaultValue={email}
                ref={this.emailInput}
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
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            {/* Adding a submit button for the form */}
            <input
              type="submit"
              defaultValue="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;

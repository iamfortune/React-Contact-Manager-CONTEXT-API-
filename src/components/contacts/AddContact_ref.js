import React, { Component } from "react";
import { Consumer } from '../../Context';


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
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }

    console.log(contact);
  };

  static defaultProps = {
      name: '',
      email: '',
      phone: ''
  }

  render() {
    const { name, email, phone } = this.props;
    return(
    <Consumer>
            {defaultValue => {
              const { dispatch } = defaultValue;
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
                          defaultValue={name}
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
                          defaultValue={email}
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
                          defaultValue={phone}
                          onChange={this.onChange}
                        />
                      </div>
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
    );
  }
}


export default AddContact;

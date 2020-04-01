import React, { Component } from "react";

class AddContact extends Component {
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  static defaultProps = {
    name: 'Fortune ikechi',
    email: 'fortune@gmail.com',
    phone: '33333333'
  }


  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="carb mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                defaultValue={name}
              />
            </div>
            {/* form group for email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="you@example.com"
                defaultValue={email}
                
              />
            </div>
            {/* form group for phone number */}
            <div className="form-group">
              <label htmlFor="phone">Phonee</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                defaultValue={phone}
                
              />
            </div>
            <input
              type="submit"
              defaultValue="Add Contact"
              className="btn btn-light n  btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;

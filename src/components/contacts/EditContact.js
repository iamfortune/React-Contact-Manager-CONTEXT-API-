import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextinputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount() {
      const { id } = this.props.match.params;
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      const contact = res.data;

      this.setState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      })
  }



  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //Check for erros and adding a required tag to the inputs
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "phone is required" } });
      return;
    }

    const updContact = {
        name,
        email,
        phone 
    };

    const { id } = this.props.match.params;

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

    dispatch({ type: 'UPDATE_CONTACT', payload: 
    res.data });

   
    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="carb mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextinputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextinputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextinputGroup
                    label="Phone"
                    name="phone"
                    type="phone"
                    placeholder="333-3333-333"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Edit Contact"
                    className="btn btn-light n  btn-block"
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

export default EditContact;

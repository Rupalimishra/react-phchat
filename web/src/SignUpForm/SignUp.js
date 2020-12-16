import React from "react";
import { Link } from 'react-router-dom';
import "./SignUp.css";

function validate(name, email, password) {
  
  const errors = [];

  if (name.length === 0 || name.length < 3) {
    errors.push("username with length between 3 and 30 characters");
  }

  if (email.length < 5) {
    // errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @ and .");
  }
  if (email.indexOf(".") === -1) {
    // errors.push("Email should contain at least one dot");
  }

  if (password.length < 3) {
    errors.push("Password should be at least 3 characters long");
  }

  return errors;
}

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",

      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, password } = this.state;

    const errors = validate(name, email, password);
    if (errors.length >= 0) {
      this.setState({ errors });
  }
}
  render() {
    const { errors } = this.state;
    return (
      <div className="main-top-style">
        <h1 className="main-heading">Sign Up</h1>
        <div>
      <form onSubmit={this.handleSubmit} className="signup">
        <div>
        {errors.map(error => (
          <p className="popup-style" key={error}>Error: {error} </p>
        ))}
        <input
          value={this.state.name}
          onChange={evt => this.setState({ name: evt.target.value })}
          type="text"
          placeholder="Name"
        /> 
        <br />
        <input
          value={this.state.email}
          onChange={evt => this.setState({ email: evt.target.value })}
          type="text"
          placeholder="Email"
          // required type="email"
        />
        <br />
        <input
          value={this.state.password}
          onChange={evt => this.setState({ password: evt.target.value })}
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign Up</button>
        <br />
        <Link to="/sign-in">Already have an account?</Link>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default SignUpForm;
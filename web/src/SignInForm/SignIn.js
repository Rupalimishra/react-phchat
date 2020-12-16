import React from "react";
import { Link } from 'react-router-dom';
import "./SignIn.css";


function validate( password) {
  
  const errors = [];

  
  // if (email.length < 5) {
  //   errors.push('Invalid Credentials');
  // }
  // if (email.split("").filter(x => x === "@").length !== 1) {
    
  // }
  // if (email.indexOf(".") === -1) {
  // }

  if (password.length < 6) {
    errors.push('Invalid Credentials');
  }

  return errors;
}

class SignInForm extends React.Component {
  constructor() {
    super();
    this.state = {
      
      email: "",
      password: "",

      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {  password } = this.state;

    const errors = validate(password);
    if (errors.length >= 0) {
      this.setState({ errors });
      return;
    }

    
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="main-top-style">
        <h1 className="main-heading">Sign In</h1>
        <div>
      <form onSubmit={this.handleSubmit} className="signup">
        <div>
        {errors.map(error => (
          <p className="popup-style" key={error}>Error: {error} </p>
        ))}
       
        <br />
        <input
          // value={this.state.email}
          // onChange={evt => this.setState({ email: evt.target.value })}
          type="text"
          placeholder="Email"
          required type="email"
        />
        <br />
        <input
          value={this.state.password}
          onChange={evt => this.setState({ password: evt.target.value })}
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign In</button>
        <br />
        <Link to="/">Don't have an account?</Link>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default SignInForm;
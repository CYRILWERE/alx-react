import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    // Bind the functions
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  // Function to handle form submission
  handleLoginSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.setState({ isLoggedIn: true });
  }

  // Function to handle changes in the email input
  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.validateSubmit);
  }

  // Function to handle changes in the password input
  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.validateSubmit);
  }

  // Function to validate if the submit button should be enabled
  validateSubmit() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="Login">
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={this.handleChangeEmail} 
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={this.handleChangePassword} 
          />
          <br />
          <input 
            type="submit" 
            value="Login" 
            disabled={!enableSubmit} 
          />
        </form>
      </div>
    );
  }
}

export default Login;


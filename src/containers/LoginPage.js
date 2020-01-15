import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import logo from "./logo.svg";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = () => {
    console.log("logging in");
  };

  handleUsernameChange = () => {
    console.log(e.target.value);
    let newUsername = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      username: newUsername
    }));
  };

  handlePasswordChange = e => {
    console.log(e.target.value);
    let newPassword = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      password: newPassword
    }));
  };

  render() {
    <div className="App">
      Log In:
      <Form onSubmit={this.handleLogin}>
        <Form.Field>
          <label>Username</label>
          <input
            id="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <label>Password</label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <Button type='submit'>Submit</Button> 
        </Form.Field>
      </Form>
    </div>;
  }
}

export default LoginPage;

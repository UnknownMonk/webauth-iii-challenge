import React, { Component } from 'react'
import axios from 'axios'

 class Signup extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              id="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="deparment" />
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              id="deparment"
              type="deparment"
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:5000/api/auth/register';
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log('LOGIN RESPONSE', res);
        
      })
      .catch(error => {
        console.error('LOGIN ERROR', error);
      });
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
}

export default Signup

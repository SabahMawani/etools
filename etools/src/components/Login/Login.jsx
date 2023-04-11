import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  state = {
    username: null,
    password: null,
    error: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      axios.post('filepath', { username, password })
        .then(response => {
          /* set state true to show user dashboard*/
        })
        .catch(error => {
          /*show error*/
          this.setState({ error: true });
        });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handleChange} />
        </div>
        {error &&
          <p> Invalid Login Or SignUp </p>
        }
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default User;

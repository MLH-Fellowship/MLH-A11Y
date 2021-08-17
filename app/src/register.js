import React from 'react';

import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

export default class Register extends React.Component {
    state = {
        username: '',
        password: '',
      }
    
      handleUsername = event => {
        this.setState({ username: event.target.value });
      }

      handlePassword = event => {
        this.setState({ password: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          username: this.state.username,
          password: this.state.password
        };
    
        axios.post(`/api/registration`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render () {
      return (
          <div >
              <h2>Sign Up Page</h2>
              <br />
              <form onSubmit={this.handleSubmit}>
                  <div class="mb-3">
                      <input type="text" class="form-control" id="username" placeholder="Username" onChange={this.handleUsername}></input>
                  </div>
                  <div class="mb-3">
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handlePassword}></input>
                  </div>
                  <button type="submit" class="btn btn-primary">Create Account</button>
              </form>

          </div>
      )
    }
}
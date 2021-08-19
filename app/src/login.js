import React from 'react';
import {
  Redirect,
  useLocation
} from 'react-router-dom'
import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

export default class Login extends React.Component {

  fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }

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
      password: this.state.password,
    };

    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true)
    })

    axios.post(`/api/login`, { "username": user.username, "password": user.password })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }



  render() {

    const [
      redirectToReferrer,
      setRedirectToReferrer
    ] = React.useState(false)
  
    const { state } = useLocation()
  
    const login = () => {if (redirectToReferrer === true) {
      return <Redirect to={state?.from || '/'} />
    }
    }
    return (
      <div >
        <h2>Login Page</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div class="mb-3">
            <input type="text" class="form-control" id="username" placeholder="Username" onChange={this.handleUsername}></input>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handlePassword}></input>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>
    )
  
}
}
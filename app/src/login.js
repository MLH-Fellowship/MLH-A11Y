import React from 'react';
import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

const HomeMarkdown = (props) => {

    const [username, setUsername] = React.useState(' ')
    const [password, setPassword] = React.useState(' ')

      handleUsername = event => {
        setUsername(event.target.value);
      }

      handlePassword = event => {
        setPassword(event.target.value);
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          username: {username},
          password: {password}
        };
    
        axios.post(`/api/login`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
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

export default HomeMarkdown
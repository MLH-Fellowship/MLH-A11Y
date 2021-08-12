import React from 'react';

// import axios from 'axios';
// import ReactMarkdown from 'react-markdown';

const HomeMarkdown = (props) => {

    return (
        <div >
            <h2>Sign Up Page</h2>
            <br />
            <form >
                <div class="mb-3">
                    <input type="text" class="form-control" id="username" placeholder="Username"></input>
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <button type="submit" class="btn btn-primary">Create Account</button>
            </form>

        </div>
    )
}

export default HomeMarkdown
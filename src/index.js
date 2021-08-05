import React from 'react'
import ReactMarkdown from 'react-markdown'
import {render} from 'react-dom'
import './index.css';
import Home from './home.md'
import Person from './markdown1.js'
import App from './App.js'

const markdown = `
# Home page

insert content here
`

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

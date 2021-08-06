import './App.css';
import Markdown2 from './markdown2';
import HomeMarkdown from './home';
import UserMarkdown from './userprofile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/unit1">Unit 1</Link>
            </li>
            <li>
              <Link to="/user">User Profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/unit1">
            <Markdown2 unit={"1"}/>
          </Route>
          <Route path="/user">
            <UserMarkdown />
          </Route>
          <Route path="/">
            <HomeMarkdown />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

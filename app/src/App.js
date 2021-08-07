import './App.css';
import Markdown2 from './markdown2';
import HomeMarkdown from './home';
import UserMarkdown from './userprofile';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom"

function App() {
  return (
    <div>
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">MLH A11y</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/user">User</Nav.Link>
                <NavDropdown title="Units" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/unit1">Unit 1</NavDropdown.Item>
                  <NavDropdown.Item href="/unit2">Unit 2</NavDropdown.Item>
                  <NavDropdown.Item href="/unit3">Unit 3</NavDropdown.Item>
                </NavDropdown>
                
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
        <div class="page-content">
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
      </div>
    </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Unit1 from './unit1';
import Unit2 from './unit2';
import Unit3 from './unit3';
import HomeMarkdown from './home';
import UserMarkdown from './userprofile';
import LogIn from './login';
import Register from './register';
import PrivateRoute from './PrivateRoute.js'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
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
                  <Nav.Link href="/user">Profile</Nav.Link>
                  <NavDropdown title="Units" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/unit1">Unit 1</NavDropdown.Item>
                    <NavDropdown.Item href="/unit2">Unit 2</NavDropdown.Item>
                    <NavDropdown.Item href="/unit3">Unit 3</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/login">Log In</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>

            </Container>
          </Navbar>
          <div class="page-content">
            <Switch>
              <PrivateRoute path="/unit1">
                <Unit1 unit={"1"} />
              </PrivateRoute>
              <PrivateRoute path="/unit2">
                <Unit2 unit={"2"} />
              </PrivateRoute>
              <PrivateRoute path="/unit3">
                <Unit3 unit={"3"} />
              </PrivateRoute>
              <PrivateRoute path="/user">
                <UserMarkdown />
              </PrivateRoute>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/register">
                <Register />
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

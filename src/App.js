import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Routes from "./components/routs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect className="heder-color">
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink
                to="/"
                exact
                activeStyle={{ color: "grey" }}
                style={{ color: "black" }}
              >
                <h4> MyPortfolio</h4>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                <NavLink
                  to="/projects"
                  className="link"
                  activeClassName="activ"
                >
                  <h4>Projects</h4>
                </NavLink>
              </NavItem>
              <NavItem
                eventKey={2}
                href="/marian.pdf"
                target="_blank"
                className="link"
              >
                {/* <a href="/marian.pdf" target="_blank" className="link">
                  <h4>Resume</h4>
                </a> */}{" "}
                {/* <NavLink
                  topathname="/marian.pdf"
                  target="_blank"
                  className="link"
                > */}
                <h4>Resume</h4>
                {/* </NavLink> */}
              </NavItem>
              <NavItem eventKey={3}>
                <NavLink
                  to="/contacts"
                  className="link"
                  activeClassName="activ"
                >
                  <h4>Contacts</h4>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;

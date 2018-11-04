import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,} from 'reactstrap';

const navItemStyle = {
  marginRight: "30px"
};

const barStyle = {
  borderBottom: "solid 2px #dc3545"
}

class NavbarElement extends Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <div>
        <Navbar color="info" className = "text-light" light expand="md" style={barStyle}>
          <NavbarBrand><h1><span className = "text-danger">Pokemon</span> Clicky Game!</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem style = {navItemStyle}>Click an image to begin!</NavItem>
              <NavItem style = {navItemStyle}>Score: 0</NavItem>
              <NavItem style = {navItemStyle}> Top Score: 0</NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarElement;
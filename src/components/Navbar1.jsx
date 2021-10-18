import { withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { Component } from "react";

class Navbar1 extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            <MdWork />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between"
          >
            <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
              <Link to="/" className="nav-link">
                Home
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navbar1;

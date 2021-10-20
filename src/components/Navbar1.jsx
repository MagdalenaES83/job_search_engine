import { withRouter } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { Component } from "react";
               
import { GiDandelionFlower} from "react-icons/gi"

import { FaSnowflake} from "react-icons/fa"

class Navbar1 extends Component {
  render() {
    return (
      <Navbar  expand="lg">
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
                Home <GiDandelionFlower />
              </Link>
              <Link to="/" className="nav-link">
                Home2 
              </Link>
              <Link to="/" className="nav-link">
                Home3 
              </Link><Link to="/" className="nav-link">
                Home4 <FaSnowflake />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navbar1;

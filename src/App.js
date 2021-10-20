import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from "./components/Favorites"

import Navbar1 from "./components/Navbar1.jsx";
import Head from "./components/Head.jsx";
import SearchResults from "./components/SearchResults.jsx";

function App() {
  return (
    <Router>
      <Navbar1 />
      <Container>
        <Row>
          <Col sm={5} className="text-center background-div">
<Head />




          </Col>

          {/* <CartIndicator cartLength={cart.length} /> */}
        
          <Col sm={6} className="text-center background-div">

<SearchResults />


          </Col>

          {/* <CartIndicator cartLength={cart.length} /> */}
        </Row>
        <hr />
       
        <Route path="/favorites" exact component ={Favorites} />
      </Container>
    </Router>
  );
}

export default App;

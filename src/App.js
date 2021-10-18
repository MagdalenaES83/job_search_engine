import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar1 from "./components/Navbar1.jsx";
import Head from "./components/Head.jsx";

function App() {
  return (
    <Router>
      <Navbar1 />
      <Container>
        <Row>
          <Col sm={6} className="text-center background-div"></Col>
<Head />
          {/* <CartIndicator cartLength={cart.length} /> */}
        </Row>
        <hr />
        {/* <Route path="/" exact render={(routerProps) => <BookStore {...routerProps} addItemToCart={addItemToCart} />} />
        <Route
          path="/cart"
          exact
          render={(routerProps) => <Cart {...routerProps} cart={cart} removeItemFromCart={removeItemFromCart} />}
        /> */}
      </Container>
    </Router>
  );
}

export default App;

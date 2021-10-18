import { Table, Button, Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { Component } from "react";
import { render } from "@testing-library/react";
import ListJobb from "./ListJobb.jsx";

class JobsList extends Component {
  state = {
    jobbs: [],
  };

  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=20"
      );
      if (resp.ok) {
        let jobb = await resp.json();

        console.log(jobb.data[1]);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <Row>
        <Col md={3}>
          <ListJobb jobbs={this.state.jobbs}></ListJobb>
        </Col>
        <Col md={3}></Col>
        <Col md={3}></Col>
        <Col md={3}></Col>
      </Row>
    );
  }
}

export default JobsList;

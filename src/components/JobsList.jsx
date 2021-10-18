import { Table,  Col, Row, Form } from "react-bootstrap";
import { Component } from "react";
import ListJobb from "./ListJobb.jsx";
import Jobb from"./Jobb.jsx";
import uniqid from 'uniqid'

class JobsList extends Component {
  state = {
    jobbs: [],
    query:"", 
    jobs:[]
  };



  //----------------------------set state - jobbs
  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=10"
      );
      if (resp.ok) {
        let fetchjobb = await resp.json();
        this.setState({ jobbs: fetchjobb.data });
      } else {
        console.log("error 1");
      }
    } catch (error) {
      console.log("error 2");
    }
  };


//-------------------------------set state jobs
fetchQuery= "https://strive-jobs-api.herokuapp.com/jobs?search="

handleChange = (e) => {  this.setState ({ query: e.target.value})}


handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch(this.fetchQuery + this.state.query + '&limit=10')
  if (!response.ok) {
      alert('Error fetching results')
      return  }
  const { data } = await response.json()
  this.setState({ jobs: data })
}

  render() {
    return (
      <Row><Col md={6}> 
        <Form onSubmit={this.handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search and enter"
        className="mr-2"
        aria-label="Search"
        value={this.state.query}
        onChange={this.handleChange}

      />
    </Form>
    {
                            this.state.jobs.map(jobData => <Jobb key={uniqid()} data={jobData} />)
                        }
    
    
     </Col> 


        <Col md={6}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Company name </th>
                <th>Position name </th>
                <th>Category</th>
                <th>Job Type</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>

          <ListJobb jobbs={this.state.jobbs}></ListJobb>
        </Col>
      </Row>
    );
  }
}

export default JobsList;

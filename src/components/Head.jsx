
import JobsList from "./JobsList.jsx"
import { Card , Row, Col, Container, Image} from "react-bootstrap";


const Head = () => {
    return (
      <>
        
  <Card > <Container>
  <Row>
    
    <Col xs={6} md={4}><h1 className="mb-5">FIND A NEW JOB </h1>
      <Image id="glob" src="https://top1000worldbanks.com/assets/2yFx6FwFoa/gettyimages-167406365-2560x2051.jpeg" roundedCircle />
    </Col>
    
  </Row>
</Container>
</Card>
        <JobsList />
      </>
    );
  };
  
  export default Head;
  
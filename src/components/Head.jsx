import JobsList from "./JobsList.jsx";
import { Row, Col, Image } from "react-bootstrap";

const Head = () => {
  return (
    <>
      <Row>
        <Col className="m-5" xs={6} md={6}>
          <h1 className="mb-5">FIND A NEW JOB </h1>
          <Image
            id="glob"
            src="https://top1000worldbanks.com/assets/2yFx6FwFoa/gettyimages-167406365-2560x2051.jpeg"
            roundedCircle
          />
        </Col>
</Row>
<Row> 
        <Col xs={6} md={6}>
          <JobsList />
        </Col>
      </Row>
    </>
  );
};

export default Head;

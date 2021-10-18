import { Card } from "react-bootstrap";

const SingleCard = ({jobb} ) => {
  <Card style={{ width: "12rem" }}>
    <Card.Body>
      <Card.Title>{jobb.company_name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{jobb.title}</Card.Subtitle>
      <Card.Text>
        {jobb.description}
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>;
};

export default SingleCard;

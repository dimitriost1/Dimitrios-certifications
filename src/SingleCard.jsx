import { Button, Card, Col } from "react-bootstrap";

const SingleCard = ({ cert_image, course, link }) => {
  return (
    <>
      <Col md={3} className="mx-4">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cert_image} />
          <Card.Body>
            <Card.Title>{course}</Card.Title>

            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Go to certificate</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleCard;

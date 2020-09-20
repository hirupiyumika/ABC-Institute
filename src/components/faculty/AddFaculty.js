import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddFaculty = ({ addFaculty }) => {
  const [faculty, setFaculty] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addFaculty({
      faculty,
    });
    setFaculty("");
  };
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Enter Faculty Name"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Faculty
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddFaculty;

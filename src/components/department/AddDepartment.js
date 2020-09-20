import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddDepartment = ({ addDepartment }) => {
  const [department, setDepartment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addDepartment({
      department,
    });
    setDepartment("");
  };
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Enter Department Name"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Department
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddDepartment;

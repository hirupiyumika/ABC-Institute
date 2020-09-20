import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddLevel = ({ addLevel }) => {
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addLevel({
      category,
      level,
    });
    setCategory("");
    setLevel("");
  };
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Enter Category Name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Enter Level"
                type="number"
                min="0"
                max="20"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Level
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddLevel;

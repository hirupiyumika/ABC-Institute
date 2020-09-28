// IT18233704 -  N.R Yamasinghe
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddProgrammeForm = ({ addProgramme }) => {
  const [programme, setProgramme] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addProgramme({
      programme,
    });
    setProgramme("");
  };
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Programme"
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
              />
            </Col>
          </Row>
          <Row></Row>
          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Programme
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddProgrammeForm;

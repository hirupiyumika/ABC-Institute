// IT18233704 -  N.R Yamasinghe
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { StudentConsumer } from "./../../context/StudentContext";

const UpdateSubGroupForm = ({ updateSubGroup, filteredSubGroup }) => {
  const [subGroup, setSubGroup] = useState(filteredSubGroup[0].subGroup);
  const [_id, set_id] = useState(filteredSubGroup[0]._id);

  const onSubmit = (e) => {
    e.preventDefault();
    updateSubGroup({
      _id,
      subGroup,
    });
    setSubGroup("");
  };
  return (
    <StudentConsumer>
      {(value) => {
        const { filteredacademicYearAndSemester } = value;

        return (
          <Card className="mt-5 mb-3">
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Row className="my-3">
                  <Col>
                    <Form.Control
                      placeholder="Sub Group"
                      value={subGroup}
                      onChange={(e) => setSubGroup(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      hidden
                      value={filteredSubGroup[0]._id}
                      onChange={(e) => set_id(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Button type="submit" variant="secondary" block>
                      Update Sub Group
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        );
      }}
    </StudentConsumer>
  );
};

export default UpdateSubGroupForm;

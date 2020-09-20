// IT18233704 -  N.R Yamasinghe
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { StudentConsumer } from "./../../context/StudentContext";

const UpdateGroupForm = ({ updateGroup, filteredGroup }) => {
  const [group, setGroup] = useState(filteredGroup[0].group);
  const [_id, set_id] = useState(filteredGroup[0]._id);

  const onSubmit = (e) => {
    e.preventDefault();
    updateGroup({
      _id,
      group,
    });
    setGroup("");
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
                      placeholder="Group"
                      value={group}
                      onChange={(e) => setGroup(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      hidden
                      value={filteredGroup[0]._id}
                      onChange={(e) => set_id(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Button type="submit" variant="secondary" block>
                      Update Group
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

export default UpdateGroupForm;

// IT18233704 -  N.R Yamasinghe
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { StudentConsumer } from "../../context/StudentContext";

const UpdateTagForm = ({ updateTag, filteredTag }) => {
  const [tag, setTag] = useState(filteredTag[0].tag);
  const [_id, set_id] = useState(filteredTag[0]._id);

  const onSubmit = (e) => {
    e.preventDefault();
    updateTag({
      _id,
      tag,
    });
    setTag("");
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
                      placeholder="Tag"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      hidden
                      value={filteredTag[0]._id}
                      onChange={(e) => set_id(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Button type="submit" variant="secondary" block>
                      Update Tag
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

export default UpdateTagForm;

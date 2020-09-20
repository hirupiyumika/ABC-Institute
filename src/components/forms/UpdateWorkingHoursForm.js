import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { DaysAndHoursConsumer } from "../../context/DaysAndHoursProvider";

const UpdateWorkingHoursForm = ({
  updateWorkingHours,
  filteredWorkingDays,
}) => {
  const [startingHours, setStartingHours] = useState(
    filteredWorkingDays[0].startingHours
  );
  const [endingHours, setEndingHours] = useState(
    filteredWorkingDays[0].endingHours
  );
  const [day, setDay] = useState(filteredWorkingDays[0].day);
  const [_id, set_id] = useState(filteredWorkingDays[0]._id);

  const onSubmit = (e) => {
    e.preventDefault();
    updateWorkingHours({
      _id,
      startingHours,
      endingHours,
    });
    setStartingHours("");
    setEndingHours("");
    set_id("");
  };
  return (
    <DaysAndHoursConsumer>
      {(value) => {
        const { filteredWorkingDays } = value;

        return (
          <Card className="mt-5 mb-3">
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Row className="my-3">
                  <Col>
                    <Form.Control
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      disabled
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="time"
                      value={startingHours}
                      onChange={(e) => setStartingHours(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="time"
                      value={endingHours}
                      onChange={(e) => setEndingHours(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      hidden
                      value={filteredWorkingDays[0]._id}
                      onChange={(e) => set_id(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Button type="submit" variant="secondary" block>
                      Update Working Day
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        );
      }}
    </DaysAndHoursConsumer>
  );
};

export default UpdateWorkingHoursForm;

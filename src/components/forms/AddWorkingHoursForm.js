import React, { useState, useContext } from "react";
import { Button, Col, Row, Form, Card, Alert } from "react-bootstrap";
import { DaysAndHoursContext } from "../../context/DaysAndHoursProvider";

const AddWorkingHoursForm = ({ AddWorkingHours }) => {
  const { workingDays } = useContext(DaysAndHoursContext);
  const [startingHours, setStartingHours] = useState([]);
  const [endingHours, setEndingHours] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    for (const [_sid, startingHours] of Object.entries(startingHours)) {
      for (const [_eid, endingHours] of Object.entries(endingHours)) {
        if (_sid == _eid) {
          var _id = _sid;
          AddWorkingHours({
            _id,
            startingHours,
            endingHours,
          });
        }
      }
    }

    window.location.reload();
  };

  const handleStartingHours = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;

    setStartingHours({
      ...startingHours,
      [evt.target.name]: value,
    });
  };

  const handleEndingHours = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;

    setEndingHours({
      ...endingHours,
      [evt.target.name]: value,
    });
  };

  return (
    <Card className="mt-5 mb-3">
      {workingDays.length == 0 ? (
        <Alert variant="danger">Oops... No working days added!</Alert>
      ) : (
        <Card.Body>
          <Row className="my-3">
            <Col>
              <label>Day:</label>
            </Col>
            <Col>
              <label>Starting Hours:</label>
            </Col>
            <Col>
              <label>Ending Hours:</label>
            </Col>
          </Row>
          <Form onSubmit={onSubmit}>
            {workingDays.map(function (item, i) {
              return (
                <Row className="my-3" key={i}>
                  <Col>
                    <Form.Control name={item._id} value={item.day} readOnly />
                  </Col>
                  <Col>
                    <Form.Control
                      type="time"
                      name={item._id}
                      key={i}
                      onChange={handleStartingHours}
                      value={item.startingHours}
                      disabled={item.startingHours ? true : false}
                    />
                  </Col>
                  -
                  <Col>
                    <Form.Control
                      type="time"
                      name={item._id}
                      key={i}
                      onChange={handleEndingHours}
                      value={item.endingHours}
                      disabled={item.endingHours ? true : false}
                    />
                  </Col>
                </Row>
              );
            })}
            <Row className="my-3">
              <Col>
                <Button type="submit" variant="secondary" block>
                  Add Working Hours
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      )}
    </Card>
  );
};

export default AddWorkingHoursForm;

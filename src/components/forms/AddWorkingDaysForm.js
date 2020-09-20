import React, { useState, useContext } from "react";
import {
  Container,
  Alert,
  Button,
  Col,
  Row,
  Form,
  Card,
} from "react-bootstrap";
import { DaysAndHoursContext } from "../../context/DaysAndHoursProvider";

const AddWorkingDaysForm = ({ AddWorkingDays }) => {
  const { workingDays } = useContext(DaysAndHoursContext);
  const [day, setDay] = useState([]);
  const [noOfDays, setnoOfDays] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    Object.values(day).map((day, index) => {
      AddWorkingDays({
        day,
      });
    });

    setnoOfDays("");
    setDay("");
    window.location.reload();
  };

  const checknoOfDays = (e) => {
    if (e > 7) {
      setnoOfDays(7);
    } else setnoOfDays(e);
  };

  const handleChange = (evt) => {
    const value = evt.target.value;

    setDay({
      ...day,
      [evt.target.name]: value,
    });
  };

  var indents = [];

  for (var i = 1; i <= noOfDays; i++) {
    indents.push(i);
  }

  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Col>
          <Row className="my-3">
            <Alert variant="info">
              <label>
                Number of Days (Allowed maximum number of days 7) :{" "}
              </label>
            </Alert>
            {workingDays.length == 7 ? (
              <Alert variant="danger">
                {workingDays.length} days currently added. More days cannot be
                added.
              </Alert>
            ) : (
              <Alert variant="warning">
                {workingDays.length} days currently added. Remaining days:{" "}
                {7 - workingDays.length}
              </Alert>
            )}

            <Form.Control
              type="number"
              min="0"
              max={7 - workingDays.length}
              value={noOfDays}
              placeholder="Working Days Per Week"
              onChange={(e) => checknoOfDays(e.target.value)}
            />
          </Row>
        </Col>

        <Form onSubmit={onSubmit}>
          {indents.map(function (item, i) {
            return (
              <Row className="my-3" key={i}>
                <Col>
                  <Form.Control
                    placeholder={"Working Day " + item}
                    name={i}
                    onChange={handleChange}
                  />
                </Col>
              </Row>
            );
          })}
          <Row className="my-3">
            <Col>
              <Button
                type="submit"
                variant="secondary"
                block
                disabled={noOfDays == 0}
              >
                Add Days
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
      <Container>
        <Row>
          <Col>
            <Alert variant="secondary">
              Days currently added:
              {workingDays.map((day) => "  " + day.day + "  ")}
            </Alert>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default AddWorkingDaysForm;

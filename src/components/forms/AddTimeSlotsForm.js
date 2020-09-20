import React, { useState, useContext } from "react";
import { Button, Col, Row, Form, Card, Alert } from "react-bootstrap";
import { DaysAndHoursContext } from "../../context/DaysAndHoursProvider";
var moment = require("moment");

const AddTimeSlotForm = ({ AddTimeSlot, updateTimeSlot }) => {
  const { workingDays, timeSlot } = useContext(DaysAndHoursContext);
  const [tSlot, setSlot] = useState("");
  var daysAndSlots = [];
  var previousSlot, _id;

  Object.values(timeSlot).map(function (item, i) {
    previousSlot = item.slot;
    _id = item._id;
  });

  const onSubmit = (e) => {
    e.preventDefault();
    var slot = tSlot.value;

    if (_id == null) {
      AddTimeSlot({
        slot,
      });
    } else {
      updateTimeSlot({
        _id,
        slot,
      });
    }
  };

  const handleTimeSlot = (evt) => {
    const value = evt.target.value;
    setSlot({
      value,
    });
  };

  //Auto create time slots for each day when user input time slots (Algo)
  {
    daysAndSlots = [];
    tSlot &&
      workingDays.map(function (item, i) {
        {
          var start = moment(item.startingHours, "HH:mm");
          var end = moment(item.endingHours, "HH:mm");

          while (start < end) {
            var s = start.format("HH:mm");
            start = start.add(tSlot.value, "minutes");
            if (start > end) {
              var e = end.format("HH:mm");
            } else {
              var e = start.format("HH:mm");
            }
            daysAndSlots.push({ day: item.day, time: s + "-" + e });
          }
        }
      });
  }

  return (
    <div>
      {workingDays.length == 0 ? (
        <Alert variant="danger">Oops... No working days added!</Alert>
      ) : (
        <div>
          <Card className="mt-5 mb-3">
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Col>
                  {previousSlot ? (
                    <Alert variant="danger">
                      Current Time Slot is: {previousSlot} min
                    </Alert>
                  ) : null}
                  <Row>
                    <Col>
                      <Form.Label>
                        Choose Time Slots (1 hour or 30 minutes):
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        defaultValue="Choose Time Slot..."
                        onChange={(e) => handleTimeSlot(e)}
                      >
                        <option disabled>Choose Time Slot...</option>
                        <option value="60">One Hour Time Slot</option>
                        <option value="30">Thirty Minutes Time Slot</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      {previousSlot ? (
                        <Button type="submit" variant="primary" block>
                          Update Time Slot
                        </Button>
                      ) : (
                        <Button type="submit" variant="secondary" block>
                          Add Time Slot
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mt-5 mb-3">
            <Card.Body>
              {tSlot ? (
                <Row>
                  {workingDays.map(function (item, i) {
                    return (
                      <Col key={i}>
                        <Col>
                          <h5>{item.day}</h5>
                        </Col>
                        {daysAndSlots.map(function (day, i) {
                          if (item.day == day.day) {
                            return <Col key={i}>{day.time}</Col>;
                          }
                        })}
                      </Col>
                    );
                  })}
                </Row>
              ) : null}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AddTimeSlotForm;

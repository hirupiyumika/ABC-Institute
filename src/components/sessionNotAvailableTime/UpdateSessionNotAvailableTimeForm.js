// IT18233704 -  N.R Yamasinghe
import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { LogConsumer } from "./../../context/context";
import {
  DaysAndHoursConsumer,
  DaysAndHoursContext,
} from "./../../context/DaysAndHoursProvider";

const UpdateSessionNotAvailableTimeForm = ({
  updateSessionNotAvailableTime,
  filteredSessionsNotAvailableTime,
}) => {
  const { workingDays } = useContext(DaysAndHoursContext);
  const [primarySession, setPrimarySession] = useState(
    filteredSessionsNotAvailableTime[0].primarySession
  );
  const [day, setDay] = useState(filteredSessionsNotAvailableTime[0].day);
  const [from, setFrom] = useState(filteredSessionsNotAvailableTime[0].from);
  const [to, setTo] = useState(filteredSessionsNotAvailableTime[0].to);
  const [_id, set_id] = useState(filteredSessionsNotAvailableTime[0]._id);
  const [selectedDay, setSelectedDay] = useState([]);
  const [sError, setSError] = useState(false);
  const [eError, setEError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    updateSessionNotAvailableTime({
      _id,
      primarySession,
      day,
      from,
      to,
    });

    setPrimarySession("");
    setDay("");
    setFrom("");
    setTo("");
  };

  const handleDay = (e) => {
    setDay(e.target.value);
    filterSelectedDay(e.target.value);
    setEError(false);
    setSError(false);
  };

  const handleFrom = (e) => {
    var inputTime = moment(e.target.value, "h:mma");
    var beginningTime = moment(selectedDay.selected[0].startingHours, "h:mma");
    var endingTime = moment(selectedDay.selected[0].endingHours, "h:mma");
    if (inputTime.isBefore(beginningTime) || endingTime.isBefore(inputTime)) {
      setSError(true);
      setFrom("");
    } else {
      setFrom(e.target.value);
    }
  };

  const handleTo = (e) => {
    var inputTime = moment(e.target.value, "h:mma");
    var beginningTime = moment(selectedDay.selected[0].startingHours, "h:mma");
    var endingTime = moment(selectedDay.selected[0].endingHours, "h:mma");
    if (endingTime.isBefore(inputTime) || inputTime.isBefore(beginningTime)) {
      setEError(true);
      setTo("");
    } else {
      setTo(e.target.value);
    }
  };

  const filterSelectedDay = (day) => {
    const selected = workingDays.filter((item) => item.day === day);
    setSelectedDay({ selected });
  };

  return (
    <LogConsumer>
      {(value1) => (
        <DaysAndHoursConsumer>
          {(value2) => {
            value1.primarySessions, value2.workingDays;
            return (
              <React.Fragment>
                <Card className="mt-5 mb-3">
                  <Card.Body>
                    <Form onSubmit={onSubmit}>
                      <Row className="my-3">
                        <Col>
                          <Form.Control
                            as="select"
                            value={primarySession}
                            onChange={(e) => setPrimarySession(e.target.value)}
                          >
                            <option value="0">Select Session</option>
                            {value1.primarySessions.map((session) => (
                              <option key={session._id} value={session._id}>
                                {`${session.lecturers} ${session.tag}
                     
                      ${session.group}
                      ${session.subject}
                      ${session.stdCount}
                      ${session.duration}`}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Control
                            as="select"
                            value={day}
                            onChange={(e) => handleDay(e)}
                          >
                            <option value="0">Select Day</option>
                            {value2.workingDays.map((workingDay) => (
                              <option
                                key={workingDay._id}
                                value={workingDay.day}
                              >
                                {workingDay.day}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col>
                          <Form.Control
                            placeholder="From"
                            type="time"
                            value={from}
                            onChange={(e) => handleFrom(e)}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {sError && (
                            <Alert variant="info">
                              {`${selectedDay.selected[0].day} Working Hours
                              Starting From ${selectedDay.selected[0].startingHours} `}
                              {moment(
                                selectedDay.selected[0].startingHours,
                                "h:mma"
                              ) > moment(12, "h:mma")
                                ? "PM"
                                : "AM"}
                            </Alert>
                          )}
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col>
                          <Form.Control
                            placeholder="To"
                            type="time"
                            value={to}
                            onChange={(e) => handleTo(e)}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {eError && (
                            <Alert variant="info">
                              {`${selectedDay.selected[0].day} Working Hours
                              Ending From ${selectedDay.selected[0].endingHours} `}
                              {moment(
                                selectedDay.selected[0].endingHours,
                                "h:mma"
                              ) > moment(12, "h:mma")
                                ? "PM"
                                : "AM"}
                            </Alert>
                          )}
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col>
                          <Button type="submit" variant="secondary" block>
                            Save
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          }}
        </DaysAndHoursConsumer>
      )}
    </LogConsumer>
  );
};

export default UpdateSessionNotAvailableTimeForm;
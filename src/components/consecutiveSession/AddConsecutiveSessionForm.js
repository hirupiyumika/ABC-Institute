import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { StudentContext } from "./../../context/StudentContext";

const AddConsecutiveSessionForm = ({ primarySessions }) => {
  const { addConsecutiveSession } = useContext(StudentContext);
  const [sessions, setSessions] = useState([]);
  const [number, setNumber] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState(false);

  var indexes = [];
  for (var i = 1; i <= number; i++) {
    indexes.push(i);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const lecturers1 = sessions[0].lecturers;
    const lecturers2 = sessions[1].lecturers;
    const duration1 = sessions[0].duration;
    const duration2 = sessions[1].duration;
    const stdCount1 = sessions[0].stdCount;
    const stdCount2 = sessions[1].stdCount;
    const group1 = sessions[0].group;
    const group2 = sessions[1].group;
    const subject1 = sessions[0].subject;
    const subject2 = sessions[1].subject;
    const tag1 = sessions[0].tag;
    const tag2 = sessions[1].tag;
    const tag3 = sessions.length === 2 ? " " : sessions[2].tag;
    const lecturers3 = sessions.length === 2 ? " " : sessions[2].lecturers;
    const duration3 = sessions.length === 2 ? " " : sessions[2].duration;
    const stdCount3 = sessions.length === 2 ? " " : sessions[2].stdCount;
    const group3 = sessions.length === 2 ? " " : sessions[2].group;
    const subject3 = sessions.length === 2 ? " " : sessions[2].subject;

    addConsecutiveSession({
      lecturers1,
      duration1,
      subject1,
      group1,
      stdCount1,
      tag1,
      lecturers2,
      duration2,
      subject2,
      group2,
      stdCount2,
      tag2,
      lecturers3,
      duration3,
      subject3,
      group3,
      group3,
      stdCount3,
      tag3,
      room,
    });
  };

  const handleSessionChange = (e) => {
    setError(false);
    const value = e.target.value;
    const selected = primarySessions.filter((item) => item._id === value);

    if (sessions.length === 0) {
      setSessions([...sessions, selected[0]]);
    } else if (selected[0].group !== sessions[0].group) {
      setError(true);
    } else {
      setSessions([...sessions, selected[0]]);
    }
  };

  return (
    <React.Fragment>
      <Card className="mt-5 mb-3">
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Row className="my-3">
              <Col>
                <Form.Control
                  type="number"
                  min="0"
                  max="3"
                  value={number}
                  placeholder="No of sessions"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Col>
            </Row>
            {indexes.map(function (item, i) {
              return (
                <Row className="my-3" key={i}>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={(e) => handleSessionChange(e)}
                    >
                      <option value="0">Select Session {item}</option>
                      {primarySessions.map((session) => (
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
              );
            })}
            {error && (
              <Alert variant="info">Student groups are not matching</Alert>
            )}
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
};
export default AddConsecutiveSessionForm;

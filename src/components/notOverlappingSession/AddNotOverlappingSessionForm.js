import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { StudentContext } from "./../../context/StudentContext";

const AddNotOverlappingSessionForm = ({ primarySessions }) => {
  const { addNotOverlappingSession } = useContext(StudentContext);
  const [sessions, setSessions] = useState([]);
  const [number, setNumber] = useState("");
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
    const mainGroup1 = sessions[0].mainGroup;
    const mainGroup2 = sessions[1].mainGroup;
    const subGroup1 = sessions[0].subGroup;
    const subGroup2 = sessions[1].subGroup;
    const subject1 = sessions[0].subject;
    const subject2 = sessions[1].subject;
    const tag1 = sessions[0].tag;
    const tag2 = sessions[1].tag;
    const tag3 = sessions.length === 2 ? " " : sessions[2].tag;
    const lecturers3 = sessions.length === 2 ? " " : sessions[2].lecturers;
    const duration3 = sessions.length === 2 ? " " : sessions[2].duration;
    const stdCount3 = sessions.length === 2 ? " " : sessions[2].stdCount;
    const mainGroup3 = sessions.length === 2 ? " " : sessions[2].mainGroup;
    const subGroup3 = sessions.length === 2 ? " " : sessions[2].subGroup;
    const subject3 = sessions.length === 2 ? " " : sessions[2].subject;
    const tag4 = sessions.length === 2 ? " " : sessions[3].tag;
    const lecturers4 = sessions.length === 2 ? " " : sessions[3].lecturers;
    const duration4 = sessions.length === 2 ? " " : sessions[3].duration;
    const stdCount4 = sessions.length === 2 ? " " : sessions[3].stdCount;
    const mainGroup4 = sessions.length === 2 ? " " : sessions[3].mainGroup;
    const subGroup4 = sessions.length === 2 ? " " : sessions[3].subGroup;
    const subject4 = sessions.length === 2 ? " " : sessions[3].subject;
    const tag5 = sessions.length === 2 ? " " : sessions[4].tag;
    const lecturers5 = sessions.length === 2 ? " " : sessions[4].lecturers;
    const duration5 = sessions.length === 2 ? " " : sessions[4].duration;
    const stdCount5 = sessions.length === 2 ? " " : sessions[4].stdCount;
    const mainGroup5 = sessions.length === 2 ? " " : sessions[4].mainGroup;
    const subGroup5 = sessions.length === 2 ? " " : sessions[4].subGroup;
    const subject5 = sessions.length === 2 ? " " : sessions[4].subject;

    addNotOverlappingSession({
      lecturers1,
      duration1,
      subject1,
      mainGroup1,
      subGroup1,
      stdCount1,
      tag1,
      lecturers2,
      duration2,
      subject2,
      mainGroup2,
      subGroup2,
      stdCount2,
      tag2,
      lecturers3,
      duration3,
      subject3,
      mainGroup3,
      subGroup3,
      stdCount3,
      tag3,
      lecturers4,
      duration4,
      subject4,
      mainGroup4,
      subGroup4,
      stdCount4,
      tag4,
      lecturers5,
      duration5,
      subject5,
      mainGroup5,
      subGroup5,
      stdCount5,
      tag5,
    });
  };

  const handleSessionChange = (e) => {
    setError(false);
    const value = e.target.value;
    const selected = primarySessions.filter((item) => item._id === value);

    if (sessions.length === 0) {
      setSessions([...sessions, selected[0]]);
    } else if (
      selected[0].mainGroup !== sessions[0].mainGroup ||
      selected[0].subGroup !== sessions[0].subGroup
    ) {
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
                  max="5"
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
                      ${session.mainGroup}
                      ${session.subGroup}
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
export default AddNotOverlappingSessionForm;

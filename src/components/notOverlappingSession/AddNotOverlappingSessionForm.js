import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { StudentContext } from "./../../context/StudentContext";

const AddNotOverlappingSessionForm = ({ primarySessions }) => {
  const { addNotOverlappingSession } = useContext(StudentContext);
  const [sessions, setSessions] = useState([]);
  const [number, setNumber] = useState("");
  const [addedError, setAddedError] = useState(false);

  var indexes = [];
  for (var i = 1; i <= number; i++) {
    indexes.push(i);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (addedError === true) {
      Swal.fire({
        icon: "info",
        title: "same session selected",
        showConfirmButton: true,
      });
    } else {
      addNotOverlappingSession({
        number,
        sessions,
      });
      Swal.fire({
        icon: "success",
        title: "not overlapping session added successfully",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  const handleSessionChange = (e) => {
    setAddedError(false);
    const value = e.target.value;
    const selected = primarySessions.filter((item) => item._id === value);
    const added = sessions.filter((item) => item._id === value);

    if (sessions.length === 0) {
      setSessions([selected[0]]);
    } else if (added.length !== 0) {
      setAddedError(true);
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
            {addedError && (
              <Alert variant="info">session already selected</Alert>
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

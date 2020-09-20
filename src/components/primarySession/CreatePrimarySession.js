import React, { useState, useContext } from "react";
import {
  Container,
  Breadcrumb,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { LogConsumer, LogContext } from "../../context/context";
import { StudentConsumer } from "../../context/StudentContext";

const CreatePrimarySession = ({}) => {
  const { createPrimarySession, alert, primarySessions } = useContext(
    LogContext
  );
  const [lecturers, setLecturers] = useState([]);
  const [tag, setTag] = useState("");
  const [mainGroup, setMainGroup] = useState("");
  const [subGroup, setSubGroup] = useState("");
  const [subject, setSubject] = useState("");
  const [stdCount, setStdCount] = useState("");
  const [duration, setDuration] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    createPrimarySession({
      lecturers,
      tag,
      mainGroup,
      subGroup,
      subject,
      stdCount,
      duration,
    });
    setLecturers("");
    setTag("");
    setMainGroup("");
    setSubGroup("");
    setSubject("");
    setStdCount("");
    setDuration("");
  };

  const handleLecturers = (e) => {
    setLecturers([...lecturers, e.target.value]);
  };

  const renderGroup = (tag) => {
    console.log("tag", tag);
    if (tag == "") {
    }
  };
  return (
    <LogConsumer>
      {(value1) => (
        <StudentConsumer>
          {(value2) => {
            value1.sortedLecturers,
              value1.sortedSubjects,
              value2.sortedStudents;
            value2.sortedTags;
            return (
              <>
                <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    Create Primary Sessions
                  </Breadcrumb.Item>
                </Breadcrumb>
                <Container>
                  <Form onSubmit={onSubmit}>
                    <Card className="mt-5 mb-3">
                      <Card.Body>
                        <h5>Current Lecturers</h5>
                        <Row className="my-3 px-4">
                          {value1.sortedLecturers.map((lec) => (
                            <Col column sm="3 p-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                // name={lec.name}
                                value={lec.name}
                                onChange={(e) => handleLecturers(e)}
                              />
                              <label class="form-check-label" for="gridCheck1">
                                {lec.name}
                              </label>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-5 mb-3">
                      <Card.Body>
                        <h5>Current Tags</h5>
                        <Row className="my-3 px-4">
                          {value2.sortedTags.map((tag) => (
                            <Col column sm="3 p-2">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions2"
                                value={tag.tag}
                                onChange={(e) => setTag(e.target.value)}
                              />
                              <label class="form-check-label" for="gridCheck1">
                                {tag.tag}
                              </label>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-5 mb-3">
                      <Card.Body>
                        <h5>
                          {tag == "" && "Current Groups / Current Sub-Groups"}
                          {tag == "Lab" && "Current Sub-Groups"}
                          {(tag == "Lecture" || tag == "Tutorial") &&
                            "Current Groups"}
                        </h5>
                        <Row className="my-3 px-4">
                          {/* {renderGroup({ tag })} */}

                          {value2.sortedStudents.map((std) => (
                            <>
                              {(tag === "" || tag === "Lab") && (
                                <Col column sm="3 p-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions1"
                                    value={std.subGroupID}
                                    onChange={(e) =>
                                      setSubGroup(e.target.value)
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    for="gridCheck1"
                                  >
                                    {std.subGroupID}
                                  </label>
                                </Col>
                              )}
                              {(tag === "" ||
                                tag === "Lecture" ||
                                tag === "Tutorial") && (
                                <Col column sm="3 p-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions1"
                                    value={std.subGroupID}
                                    onChange={(e) =>
                                      setSubGroup(e.target.value)
                                    }
                                  />
                                  <label
                                    class="form-check-label"
                                    for="gridCheck1"
                                  >
                                    {std.mainGroupID}
                                  </label>
                                </Col>
                              )}
                            </>
                          ))}
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-5 mb-3">
                      <Card.Body>
                        <h5>Current Subjects & Code</h5>
                        <Row className="my-3 px-4">
                          {value1.sortedSubjects.map((subj) => (
                            <Col column sm="3 p-2">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions3"
                                value={subj.subject + "(" + subj.code + ")"}
                                onChange={(e) => setSubject(e.target.value)}
                              />
                              <label class="form-check-label" for="gridCheck1">
                                {subj.subject} ({subj.code})
                              </label>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card className="mt-5 mb-3">
                      <Card.Body>
                        <h5>No of Students & Duration</h5>
                        <Row className="my-3">
                          <Col>
                            <Form.Control
                              placeholder="No of Students"
                              type="number"
                              min="0"
                              max="5000"
                              value={stdCount}
                              onChange={(e) => setStdCount(e.target.value)}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              placeholder="Duration(Hours)"
                              type="number"
                              min="0"
                              max="5"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                            />
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    <Row className="my-3">
                      <Col>
                        <Button type="submit" variant="secondary" block>
                          Create Primary Session
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                  {alert.show && (
                    <Alert variant={alert.variant}>{alert.message}</Alert>
                  )}
                  <Row className="my-3 px-4">
                    {primarySessions.map((session, index) => (
                      <Col column sm="4 p-2">
                        <Card
                          className="mt-5 mb-3"
                          style={{ border: "solid black" }}
                        >
                          <Card.Body>
                            <h5>Primary Session {index + 1} </h5>
                            <Col column sm="12">
                              <label
                                className="form-check-label"
                                for="gridCheck1"
                              >
                                {session.lecturers + ""}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label
                                className="form-check-label"
                                for="gridCheck1"
                              >
                                {session.tag}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label
                                className="form-check-label"
                                for="gridCheck1"
                              >
                                {session.mainGroup
                                  ? session.mainGroup
                                  : session.subGroup}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label
                                className="form-check-label"
                                for="gridCheck1"
                              >
                                {session.subject}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label
                                className="form-check-label"
                                for="gridCheck1"
                              >
                                {session.stdCount} ({session.duration})
                              </label>
                            </Col>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </>
            );
          }}
        </StudentConsumer>
      )}
    </LogConsumer>
  );
};

export default CreatePrimarySession;

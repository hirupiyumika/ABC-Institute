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
import { Link } from "react-router-dom";
import SearchBox from "../../components/common/SearchBox";

const CreatePrimarySession = ({}) => {
  const {
    createPrimarySession,
    alert,
    sortedPrimarySessions,
    search,
    handleSearch,
    deleteSession,
  } = useContext(LogContext);
  const [lecturers, setLecturers] = useState([]);
  const [tag, setTag] = useState("");
  const [group, setGroup] = useState("");
  const [subject, setSubject] = useState("");
  const [code, setCode] = useState("");
  const [stdCount, setStdCount] = useState("");
  const [duration, setDuration] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    createPrimarySession({
      lecturers,
      tag,
      group,
      subject,
      code,
      stdCount,
      duration,
    });
    setLecturers("");
    setTag("");
    setGroup("");
    setSubject("");
    setCode("");
    setStdCount("");
    setDuration("");
  };

  const handleLecturers = (e) => {
    setLecturers([...lecturers, e.target.value]);
  };

  const handleSubject = (e, subj) => {
    setSubject(subj.subject);
    setCode(subj.code);
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
                                    onChange={(e) => setGroup(e.target.value)}
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
                                    value={std.mainGroupID}
                                    onChange={(e) => setGroup(e.target.value)}
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
                                value={subj.subject}
                                onChange={(e) => handleSubject(e, subj)}
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
                    <SearchBox
                      handleChange={handleSearch}
                      search={search}
                      placeholder="Search"
                    />
                    {sortedPrimarySessions.map((session, index) => (
                      <>
                        {(session.lectureHalls == "" ||
                          session.laboratories == "") && (
                          <Col column sm="4 p-2">
                            <Card
                              className="mt-5 mb-3"
                              style={{ border: "solid black" }}
                            >
                              <div>
                                <Button
                                  variant="btn btn-outline-danger"
                                  size="sm"
                                  style={{
                                    float: "right",
                                    border: "none",
                                    color: "black",
                                  }}
                                  onClick={() => deleteSession(session._id)}
                                >
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-x"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                  </svg>
                                </Button>
                              </div>
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
                                    {session.group}
                                  </label>
                                </Col>
                                <Col column sm="12">
                                  <label
                                    className="form-check-label"
                                    for="gridCheck1"
                                  >
                                    {session.subject}( {session.code})
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
                        )}
                      </>
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

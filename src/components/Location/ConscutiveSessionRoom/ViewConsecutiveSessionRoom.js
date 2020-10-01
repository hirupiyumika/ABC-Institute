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
import { LogConsumer, LogContext } from "../../../context/context";
import { Link } from "react-router-dom";
import { StudentContext } from "../../../context/StudentContext";

const ViewConsecutiveSessionRoom = ({}) => {
  const { sortedConsecutiveSessions } = useContext(StudentContext);
  const { deleteConsecutiveSessionRoom } = useContext(LogContext);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>View Consecutive-Session Rooms</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row className="my-3 px-4">
          {sortedConsecutiveSessions.map((session, index) => (
            <>
              {session.room !== "" && (
                <Col column sm="4" key={session._id}>
                  <Card className="mt-5 mb-3" style={{ border: "solid black" }}>
                    <div>
                      <Button
                        variant="btn btn-outline-danger"
                        size="sm"
                        style={{
                          float: "right",
                          border: "none",
                          color: "black",
                        }}
                        onClick={() => deleteConsecutiveSessionRoom(session)}
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
                    <Card.Body key={index}>
                      <h5>Consecutive Session {index + 1} </h5>
                      {session.sessions.map((item, index) => (
                        <div>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.lecturers + ""}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.tag}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.group}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.subject}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.stdCount} ({item.duration})
                            </label>
                          </Col>
                        </div>
                      ))}
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {session.room}
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
};

export default ViewConsecutiveSessionRoom;

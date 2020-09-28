import React, { useContext } from "react";
import { Container, Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import { LogContext } from "../../context/context";
import { Link } from "react-router-dom";

const ViewPrimarySession = ({}) => {
  const { primarySessions, deleteSession, alert } = useContext(LogContext);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>View Primary Sessions</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row className="my-3 px-4">
          {primarySessions.map((session, index) => (
            <>
              {session.room == "" && (
                <Col column sm="4 p-2">
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
                        <label className="form-check-label" for="gridCheck1">
                          {session.lecturers + ""}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {session.tag}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {session.group}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {session.subject}({session.code})
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
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
};

export default ViewPrimarySession;

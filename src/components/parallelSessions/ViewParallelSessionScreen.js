import React, { useContext } from "react";
import { Container, Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import { StudentContext } from "../../context/StudentContext";

const ViewParallelSessionScreen = ({}) => {
  const { parallelSessions } = useContext(StudentContext);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>View Parallel Sessions</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row className="my-3 px-4">
          {parallelSessions.map((session, index) => (
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
                    // onClick={() => deleteSession(session._id)}
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
                  <h5>Consecutive Session {index + 1} </h5>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.lecturers1 + ""}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.tag1}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.group1}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.subject1}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.stdCount1} ({session.duration1})
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.lecturers2 + ""}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.tag2}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.group2}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.subject2}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.stdCount2} ({session.duration2})
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.lecturers3 + ""}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.tag3}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.group3}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.subject3}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.stdCount3 === 0 ? " " : session.stdCount3}
                      {session.duration3 === 0 ? "" : `(${session.duration3})`}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.lecturers4 + ""}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.tag4}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.group4}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.subject4}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.stdCount4 === 0 ? " " : session.stdCount4}
                      {session.duration4 === 0 ? "" : `(${session.duration4})`}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.lecturers5 + ""}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.tag5}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.group5}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.subject5}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.stdCount5 === 0 ? " " : session.stdCount5}
                      {session.duration5 === 0 ? "" : `(${session.duration5})`}
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
};

export default ViewParallelSessionScreen;

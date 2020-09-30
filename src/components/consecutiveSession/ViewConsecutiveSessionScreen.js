import React, { useContext } from "react";
import { Container, Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import DeleteCrossButton from "./../common/DeleteCrossButton";
import { StudentContext } from "../../context/StudentContext";

const ViewConsecutiveSessionScreen = ({}) => {
  const { consecutiveSessions, deleteConsecutiveSession } = useContext(
    StudentContext
  );
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>View Consecutive Sessions</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row className="my-3 px-4">
          {consecutiveSessions.map((session, index) => (
            <Col column sm="4 p-2" key={session._id}>
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
                    onClick={() => deleteConsecutiveSession(session._id)}
                  >
                    <DeleteCrossButton />
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
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ViewConsecutiveSessionScreen;

import React, { useContext } from "react";
import { Container, Breadcrumb, Card, Row, Col, Button } from "react-bootstrap";
import { StudentContext } from "../../context/StudentContext";

const ViewNotOverlappingSessionScreen = ({}) => {
  const { notOverlappingSessions } = useContext(StudentContext);
  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>View Not Overlapping Sessions</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row className="my-3 px-4">
          {notOverlappingSessions.map((session, index) => (
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
                <Card.Body key={index}>
                  <h5>Consecutive Session {index + 1} </h5>
                  {session.sessions.map((item, index) => (
                    <div>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {item.lecturers + ""}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {item.tag}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {item.group}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {item.subject}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {item.stdCount} ({item.duration})
                        </label>
                      </Col>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ViewNotOverlappingSessionScreen;

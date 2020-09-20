import React, { useContext } from "react";
import { Container, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import { LogContext } from "../../context/context";

const ViewPrimarySession = ({}) => {
  const { primarySessions } = useContext(LogContext);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>View Primary Sessions</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row className="my-3 px-4">
          {primarySessions.map((session, index) => (
            <Col column sm="4 p-2">
              <Card className="mt-5 mb-3" style={{ border: "solid black" }}>
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
                      {session.mainGroup ? session.mainGroup : session.subGroup}
                    </label>
                  </Col>
                  <Col column sm="12">
                    <label className="form-check-label" for="gridCheck1">
                      {session.subject}
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
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ViewPrimarySession;

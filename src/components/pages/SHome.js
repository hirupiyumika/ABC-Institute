import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row, Breadcrumb } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Working Days and Hours Management
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container className="mt-5">
          <Row>
            <Col className="mt-5">
              <Link
                to="/addWorkingDays"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Working Days
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewWorkingDays"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Working Days
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addWorkingHours"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Working Hours
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewWorkingHours"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Working Hours
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addTimeSlots"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Time Slots
                </Button>
              </Link>
            </Col>
            <Col className="mt-5"></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;

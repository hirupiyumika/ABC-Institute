import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Container, Breadcrumb } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Container className="mt-5">
          <Row>
            <Col className="mt-5">
              <Link
                to="/managementOne"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Student & Tag Management
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/managementTwo"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Lecturer & Subject Management
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/managementThree"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Location & Statistic Management
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/sHome"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Working Days & Hours Management
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/session1"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Create Primary Sessions
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewSession1"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Primary Sessions ( stage-i )
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;

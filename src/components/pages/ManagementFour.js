// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class ManagementFour extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Not Available Time Management
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container className="mt-5">
          <Row>
            <Col className="mt-5">
              <Link
                to="/addLecturerNotAvailableTime"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Lecturer Not Available Time
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/addConsecutiveSession"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Consecutive Session
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addGroupNotAvailableTime"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Group Not Available Time
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/addSubGroupNotAvailableTime"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Sub Group Not Available Time
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addSessionNotAvailableTime"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Session Not Available Time
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ManagementFour;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Breadcrumb from "react-bootstrap/Breadcrumb";

class ManagementTwo extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Lecturer & Subject Management
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container className="mt-5">
          <Row>
            <Col className="mt-5">
              <Link
                to="/lecturer"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Lecturer
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewLecturers"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Lecturers
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/subject"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Subject
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewSubjects"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Subject
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/faculty"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Faculty
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewFaculties"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Faculties
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/department"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Department
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewDepartments"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Departments
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/center"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Center
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewCenters"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Centers
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/level"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Level
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewLevels"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Level
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ManagementTwo;

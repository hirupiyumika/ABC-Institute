// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class ManagementOne extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active> Student & Tag Management</Breadcrumb.Item>
        </Breadcrumb>
        <Container className="mt-5">
          <Row>
            <Col className="mt-5">
              <Link
                to="/addAcademicYearAndSemester"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Academic Year And Semester
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewAcademicYearAndSemester"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Academic Year And Semester
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addProgramme"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Programme
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewProgramme"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Programme
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addGroup"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Group
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewGroup"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Group
                </Button>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col className="mt-5">
              <Link
                to="/addSubGroup"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Sub Group
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewSubGroup"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Sub Group
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addTag"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Tag
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewTag"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Tag
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addStudent"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add student
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewStudent"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View student
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ManagementOne;

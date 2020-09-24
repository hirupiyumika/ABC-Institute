import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class ManagementThree extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Location & Statistic Management
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container className="mt-5">
          <Row>
            <Col className="mt-5">
              <Link
                to="/building"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Building
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewBuildings"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Building
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/room"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Room
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Room
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/lecturersStatistics"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Lecturers Statistics
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/studentsStatistics"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Students Statistics
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/subjectsStatistics"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Subject Statistics
                </Button>
              </Link>
            </Col>
            <Col className="mt-5"></Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addLecturerRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Lecturer's Rooms
                </Button>
              </Link>
            </Col>
            <Col className="mt-5"></Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addGroupsRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Group's Rooms
                </Button>
              </Link>
            </Col>
            <Col className="mt-5"></Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addTagsRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Tag's Rooms
                </Button>
              </Link>
            </Col>
            <Col className="mt-5"></Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addSubjectRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Subject's Rooms
                </Button>
              </Link>
            </Col>
            <Col className="mt-5"></Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/notAvailableRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Not Available Rooms
                </Button>
              </Link>
            </Col>
            <Col className="mt-5"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ManagementThree;

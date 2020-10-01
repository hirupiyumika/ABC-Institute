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
            <Col className="mt-5">
              <Link
                to="/statistics"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Statistics
                </Button>
              </Link>
            </Col>
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
            <Col className="mt-5">
              <Link
                to="/viewLecturerRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Lecturer's Rooms
                </Button>
              </Link>
            </Col>
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
            <Col className="mt-5">
              <Link
                to="/viewGroupsRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Group's Rooms
                </Button>
              </Link>
            </Col>
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
            <Col className="mt-5">
              <Link
                to="/viewTagsRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Tag's Rooms
                </Button>
              </Link>
            </Col>
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
            <Col className="mt-5">
              <Link
                to="/viewSubjectRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Subject's Rooms
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/addSessionRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Session's Rooms
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewSessionRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Session's Rooms
                </Button>
              </Link>
            </Col>
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
            <Col className="mt-5">
              <Link
                to="/viewNotAvailableRooms"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Not Available Rooms
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <Link
                to="/consecutiveSessionRoom"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Consecutive-Session Rooms
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewConsecutiveSessionRoom"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Consecutive-Session Rooms
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ManagementThree;

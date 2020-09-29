// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class ManagementSix extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Parallel Session Management</Breadcrumb.Item>
        </Breadcrumb>
        <Container className="mt-5">
          <Row>
            <Col className="mt-5">
              <Link
                to="/addParallelSession"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  Add Parallel Session
                </Button>
              </Link>
            </Col>
            <Col className="mt-5">
              <Link
                to="/viewParallelSession"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button variant="secondary" block>
                  View Parallel Session
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ManagementSix;

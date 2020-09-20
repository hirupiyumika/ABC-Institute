import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";
import FacultyTableBody from "./FacultyTableBody";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const EditFaculty = () => {
  const { fac, updateFaculty } = useContext(LogContext);
  const [_id, setId] = useState(fac[0]._id);
  const [faculty, setFaculty] = useState(fac[0].faculty);

  const onSubmit = (e) => {
    e.preventDefault();
    updateFaculty({
      _id,
      faculty,
    });
    setId("");
    setFaculty("");
  };
  return (
    <LogConsumer>
      {(value) => {
        const { faculties, alert, deleteFaculty } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Update Faculty</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <Card className="mt-5 mb-3">
                <Card.Body>
                  <Form onSubmit={onSubmit}>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          placeholder="Enter Faculty Name"
                          value={faculty}
                          onChange={(e) => setFaculty(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Button type="submit" variant="secondary" block>
                          Update Faculty
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Container>
            <Container>
              {alert.show && (
                <Alert variant={alert.variant}>{alert.message}</Alert>
              )}
              <Table>
                <thead>
                  <tr>
                    <th>Faculty</th>
                    <th>Create</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {faculties.map((fac) => (
                    <FacultyTableBody
                      key={fac._id}
                      fac={fac}
                      deleteFaculty={deleteFaculty}
                    />
                  ))}
                </tbody>
              </Table>
            </Container>
          </>
        );
      }}
    </LogConsumer>
  );
};

export default EditFaculty;

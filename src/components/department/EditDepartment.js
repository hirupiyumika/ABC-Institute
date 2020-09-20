import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";
import DepartmentTableBody from "./DepartmentTableBody";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const EditDepartment = () => {
  const { dep, updateDepartment } = useContext(LogContext);
  const [_id, setId] = useState(dep[0]._id);
  const [department, setDepartment] = useState(dep[0].department);

  const onSubmit = (e) => {
    e.preventDefault();
    updateDepartment({
      _id,
      department,
    });
    setId("");
    setDepartment("");
  };
  return (
    <LogConsumer>
      {(value) => {
        const { departments, alert, deleteDepartment } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Update Department</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <Card className="mt-5 mb-3">
                <Card.Body>
                  <Form onSubmit={onSubmit}>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          placeholder="Enter Department Name"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Button type="submit" variant="secondary" block>
                          Update Department
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
                    <th>Department</th>
                    <th>Create</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dep) => (
                    <DepartmentTableBody
                      key={dep._id}
                      dep={dep}
                      deleteDepartment={deleteDepartment}
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

export default EditDepartment;

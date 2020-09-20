import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";
import CenterTableBody from "./CenterTableBody";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const EditCenter = () => {
  const { cent, updateCenter } = useContext(LogContext);
  const [_id, setId] = useState(cent[0]._id);
  const [center, setCenter] = useState(cent[0].center);

  const onSubmit = (e) => {
    e.preventDefault();
    updateCenter({
      _id,
      center,
    });
    setId("");
    setCenter("");
  };
  return (
    <LogConsumer>
      {(value) => {
        const { centers, alert, deleteCenter } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Update Center</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <Card className="mt-5 mb-3">
                <Card.Body>
                  <Form onSubmit={onSubmit}>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          placeholder="Enter Center Name"
                          value={center}
                          onChange={(e) => setCenter(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Button type="submit" variant="secondary" block>
                          Update Center
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
                    <th>Center</th>
                    <th>Create</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {centers.map((cent) => (
                    <CenterTableBody
                      key={cent._id}
                      cent={cent}
                      deleteCenter={deleteCenter}
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

export default EditCenter;

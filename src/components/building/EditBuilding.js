import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";
import BuildingTableBody from "./BuildingTableBody";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const EditBuilding = () => {
  const { buil, updateBuilding } = useContext(LogContext);
  const [_id, setId] = useState(buil[0]._id);
  const [building, setBuilding] = useState(buil[0].building);

  const onSubmit = (e) => {
    e.preventDefault();
    updateBuilding({
      _id,
      building,
    });
    setId("");
    setBuilding("");
  };
  return (
    <LogConsumer>
      {(value) => {
        const { buildings, alert, deleteBuilding } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Update Building</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <Card className="mt-5 mb-3">
                <Card.Body>
                  <Form onSubmit={onSubmit}>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          placeholder="Enter Building Name"
                          value={building}
                          onChange={(e) => setBuilding(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Button type="submit" variant="secondary" block>
                          Update Building
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
                    <th>Building</th>
                    <th>Create</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {buildings.map((buil) => (
                    <BuildingTableBody
                      key={buil._id}
                      buil={buil}
                      deleteBuilding={deleteBuilding}
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

export default EditBuilding;

import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";
import LevelTableBody from "./LevelTableBody";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const EditLevel = () => {
  const { lev, updateLevel } = useContext(LogContext);
  const [_id, setId] = useState(lev[0]._id);
  const [category, setCategory] = useState(lev[0].category);
  const [level, setLevel] = useState(lev[0].level);

  const onSubmit = (e) => {
    e.preventDefault();
    updateLevel({
      _id,
      category,
      level,
    });
    setId("");
    setCategory("");
    setLevel("");
  };
  return (
    <LogConsumer>
      {(value) => {
        const { levels, alert, deleteLevel } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Update Level</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <Card className="mt-5 mb-3">
                <Card.Body>
                  <Form onSubmit={onSubmit}>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          placeholder="Enter Category Name"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          placeholder="Enter Level"
                          type="number"
                          min="0"
                          max="20"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                        />
                      </Col>
                    </Row>

                    <Row className="my-3">
                      <Col>
                        <Button type="submit" variant="secondary" block>
                          Update Level
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
                    <th>Level</th>
                    <th>Create</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {levels.map((lev) => (
                    <LevelTableBody
                      key={lev._id}
                      lev={lev}
                      deleteLevel={deleteLevel}
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

export default EditLevel;

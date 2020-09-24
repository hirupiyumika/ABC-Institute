import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";

const AddRoom = () => {
  const { addRoom, buildings } = useContext(LogContext);
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [building, setBuilding] = useState("");
  const [capacity, setCapacity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addRoom({
      roomName,
      building,
      capacity,
      roomType,
    });
    setRoomName("");
    setBuilding("");
    setCapacity("");
    setRoomType("");
  };
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Enter Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                as="select"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="none">Select Room Type</option>
                <option value="Lecture Hall">Lecture Hall</option>
                <option value="Laboratory">Laboratory </option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Form.Control
                as="select"
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
              >
                <option value="none">Select Building</option>
                {buildings.map((building) => (
                  <option key={building._id} value={building.building}>
                    {building.building}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                placeholder="Enter Capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Room
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddRoom;

import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";
import RoomTableBody from "./RoomTableBody";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const EditRoom = () => {
  const { buildings, room, updateRoom } = useContext(LogContext);
  const [_id, setId] = useState(room[0]._id);
  const [roomName, setRoomName] = useState(room[0].roomName);
  const [building, setBuilding] = useState(room[0].building);
  const [capacity, setCapacity] = useState(room[0].capacity);

  const onSubmit = (e) => {
    e.preventDefault();
    updateRoom({
      _id,
      roomName,
      building,
      capacity,
    });
    setId("");
    setRoomName("");
    setBuilding("");
    setCapacity("");
  };
  return (
    <LogConsumer>
      {(value) => {
        const { rooms, alert, deleteRoom } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Update Room</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
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
                            <option
                              key={building._id}
                              value={building.building}
                            >
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
                          Update Room
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
                    <th>Room</th>
                    <th>Building</th>
                    <th>Capacity</th>
                    <th>Create</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <RoomTableBody
                      key={room._id}
                      room={room}
                      deleteRoom={deleteRoom}
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

export default EditRoom;

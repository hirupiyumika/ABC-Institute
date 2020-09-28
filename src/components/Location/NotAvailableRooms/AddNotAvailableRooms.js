import React, { useState, useContext } from "react";
import {
  Row,
  Card,
  Button,
  Col,
  Form,
  Breadcrumb,
  Container,
  Table,
  Alert,
} from "react-bootstrap";
import { LogConsumer, LogContext } from "../../../context/context";
import { DaysAndHoursContext } from "../../../context/DaysAndHoursProvider";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const AddNotAvailableRooms = () => {
  const {
    sortedRooms,
    AddNotAvailableRooms,
    notAvailableRooms,
    deleteNotAvailableRoom,
    alert,
  } = useContext(LogContext);
  const { workingDays } = useContext(DaysAndHoursContext);

  const [room, setRoom] = useState("");
  const [day, setDay] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    AddNotAvailableRooms({
      room,
      day,
      start,
      end,
    });
    setRoom("");
    setDay("");
    setStart("");
    setEnd("");
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Not-Rooms</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Card className="mt-5 mb-3">
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Row className="my-3">
                <Col>
                  <Form.Control
                    as="select"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                  >
                    <option value="none">Select Room</option>
                    {sortedRooms.map((room) => (
                      <option key={room._id} value={room.roomName}>
                        {room.roomName}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  >
                    <option value="none">Select Day</option>
                    {workingDays.map((day) => (
                      <option key={day._id} value={day.day}>
                        {day.day}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Row>
              <Row className="my-3">
                <Col>
                  <Form.Control
                    type="time"
                    // name={item._id}
                    // key={i}
                    onChange={(e) => setStart(e.target.value)}
                    value={start}
                    // disabled={item.endingHours ? true : false}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="time"
                    // name={item._id}
                    // key={i}
                    onChange={(e) => setEnd(e.target.value)}
                    value={end}
                    // disabled={item.endingHours ? true : false}
                  />
                </Col>
              </Row>
              <Row className="my-3">
                <Col>
                  <Button type="submit" variant="secondary" block>
                    Add Not Available Rooms
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
        <Table>
          <thead>
            <tr>
              <th>Room</th>
              <th>Day</th>
              <th>Start</th>
              <th>End</th>
              <th>Created Date</th>
              <th>Created Time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {notAvailableRooms.map((room) => (
              <tr>
                <td>{room.room}</td>
                <td>{room.day}</td>
                <td>{room.start}</td>
                <td>{room.end}</td>
                <td>
                  <Moment format="DD/MM/YYYY">{new Date(room.created)}</Moment>
                </td>
                <td>
                  <Moment format="h:mm:ss a">{new Date(room.created)}</Moment>
                </td>

                <td>
                  <Link to="/editLecturer">
                    <Button
                      variant="primary"
                      size="sm"
                      // onClick={() => singleLecturer(_id)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-pencil-square"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteNotAvailableRoom(room._id)}
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-trash"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AddNotAvailableRooms;

import React, { useState, useContext } from "react";
import {
  Container,
  Breadcrumb,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { LogConsumer, LogContext } from "../../../context/context";
import { Link } from "react-router-dom";
import { StudentContext } from "../../../context/StudentContext";

const AddConsecutiveSessionRoom = ({}) => {
  const {
    AddConsecutiveSessionRoom,
    deleteConsecutiveSessionRoom,
    alert,
    groupRooms,
    lecturerRooms,
    subjectRooms,
    tagRooms,
    sortedRooms,
  } = useContext(LogContext);
  const { sortedConsecutiveSessions } = useContext(StudentContext);
  const [_id, setId] = useState("");
  const [number, setNumber] = useState("");
  const [sessions, setSessions] = useState("");
  const [room, setRoom] = useState("");
  // const [sr, setSr] = useState([]);
  // const [lr, setLr] = useState([]);
  // const [gr, setGr] = useState([]);
  // const [tr, setTr] = useState([]);
  // const [mr, setMr] = useState([]);
  // const [ml, setMl] = useState([]);

  console.log("sortedConsecutiveSessions", sortedConsecutiveSessions);
  const onSubmit = (e) => {
    e.preventDefault();
    AddConsecutiveSessionRoom({
      _id,
      number,
      sessions,
      room,
    });
    setId("");
    setNumber("");
    setSessions("");
    setRoom("");
  };

  const handleSession = (e, session) => {
    console.log(session);
    // filterRooms(session);
    setId(session._id);
    setNumber(session.number);
    setSessions(session.sessions);
  };

  // const filterRooms = (data) => {
  //   setSr(
  //     subjectRooms.filter((s) => s.subject == data.subject && s.tag == data.tag)
  //   );
  //   setLr(
  //     lecturerRooms.filter(
  //       (l) => l.lecturer == data.lecturers.map((lec) => lec)
  //     )
  //   );
  //   setGr(groupRooms.filter((g) => g.group == data.group));
  //   setTr(tagRooms.filter((t) => t.tagName == data.tag));

  //   setMr(
  //     ((sr.lectureHalls == lr.lectureHalls) == gr.lectureHalls) ==
  //       tr.lectureHalls
  //   );
  //   setMl(
  //     ((sr.laboratories == lr.laboratories) == gr.laboratories) ==
  //       tr.laboratories
  //   );
  // };
  // console.log("SRq", tr);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Consecutive-Session Rooms</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Form onSubmit={onSubmit}>
          <Card>
            <Card.Body>
              <h5>Current Consecutive Sessions</h5>
              <Row className="my-3 px-4">
                {sortedConsecutiveSessions.map((session, index) => (
                  <>
                    {session.room == "" && (
                      <Col column sm="4" key={session._id}>
                        <Card
                          className="mt-5 mb-3"
                          style={{ border: "solid black" }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions1"
                            value={session.tag}
                            //   onChange={(e) => setLecturer(e.target.value)}
                            onChange={(e) => handleSession(e, session)}
                          />
                          <Card.Body key={index}>
                            <h5>Consecutive Session {index + 1} </h5>
                            {session.sessions.map((item, index) => (
                              <div>
                                <Col column sm="12">
                                  <label
                                    className="form-check-label"
                                    for="gridCheck1"
                                  >
                                    {item.lecturers + ""}
                                  </label>
                                </Col>
                                <Col column sm="12">
                                  <label
                                    className="form-check-label"
                                    for="gridCheck1"
                                  >
                                    {item.tag}
                                  </label>
                                </Col>
                                <Col column sm="12">
                                  <label
                                    className="form-check-label"
                                    for="gridCheck1"
                                  >
                                    {item.group}
                                  </label>
                                </Col>
                                <Col column sm="12">
                                  <label
                                    className="form-check-label"
                                    for="gridCheck1"
                                  >
                                    {item.subject}
                                  </label>
                                </Col>
                                <Col column sm="12">
                                  <label
                                    className="form-check-label"
                                    for="gridCheck1"
                                  >
                                    {item.stdCount} ({item.duration})
                                  </label>
                                </Col>
                              </div>
                            ))}
                          </Card.Body>
                        </Card>
                      </Col>
                    )}
                  </>
                ))}
              </Row>
            </Card.Body>
          </Card>

          {/* <>
            <>
              {sr.map((room) => (
                <>
                  <Card className="mt-5 mb-3">
                    <Card.Body>
                      <h5>Subject base Lecture Halls</h5>
                      <Row className="my-3 px-4">
                        <>
                          {room.lectureHalls.map((hall) => (
                            <Col column sm="3 p-2" key={hall}>
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions2"
                                value={hall}
                                onChange={(e) => setRoom(e.target.value)}
                              />
                              <label className="form-check-label">{hall}</label>
                            </Col>
                          ))}
                        </>
                      </Row>
                      <h5>Subject base Laboratories </h5>
                      <Row className="my-3 px-4">
                        <>
                          {room.laboratories.map((lab) => (
                            <Col column sm="3 p-2" key={lab}>
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions2"
                                value={lab}
                                onChange={(e) => setRoom(e.target.value)}
                              />
                              <label className="form-check-label">{lab}</label>
                            </Col>
                          ))}
                        </>
                      </Row>
                    </Card.Body>
                  </Card>
                </>
              ))}
            </>
          </> */}
          {/* <>
            {lr.map((room) => (
              <>
                <Card className="mt-5 mb-3">
                  <Card.Body>
                    <h5>Lecturer base Lecture Halls</h5>
                    <Row className="my-3 px-4">
                      <>
                        {room.lectureHalls.map((hall) => (
                          <Col column sm="3 p-2" key={hall}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions2"
                              value={hall}
                              onChange={(e) => setRoom(e.target.value)}
                            />
                            <label className="form-check-label">{hall}</label>
                          </Col>
                        ))}
                      </>
                    </Row>
                    <h5>Lecturer base Laboratories </h5>
                    <Row className="my-3 px-4">
                      <>
                        {room.laboratories.map((lab) => (
                          <Col column sm="3 p-2" key={lab}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions2"
                              value={lab}
                              onChange={(e) => setRoom(e.target.value)}
                            />
                            <label className="form-check-label">{lab}</label>
                          </Col>
                        ))}
                      </>
                    </Row>
                  </Card.Body>
                </Card>
              </>
            ))}
          </> */}
          {/* <>
            {gr.map((room) => (
              <>
                <Card className="mt-5 mb-3">
                  <Card.Body>
                    <h5>Group base Lecture Halls</h5>
                    <Row className="my-3 px-4">
                      <>
                        {room.lectureHalls.map((hall) => (
                          <Col column sm="3 p-2" key={hall}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions2"
                              value={hall}
                              onChange={(e) => setRoom(e.target.value)}
                            />
                            <label className="form-check-label">{hall}</label>
                          </Col>
                        ))}
                      </>
                    </Row>
                    <h5>Group base Laboratories </h5>
                    <Row className="my-3 px-4">
                      <>
                        {room.laboratories.map((lab) => (
                          <Col column sm="3 p-2" key={lab}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions2"
                              value={lab}
                              onChange={(e) => setRoom(e.target.value)}
                            />
                            <label className="form-check-label">{lab}</label>
                          </Col>
                        ))}
                      </>
                    </Row>
                  </Card.Body>
                </Card>
              </>
            ))}
          </> */}
          {/* <>
            {tr.map((room) => (
              <>
                <Card className="mt-5 mb-3">
                  <Card.Body>
                    <h5>Tag base Lecture Halls</h5>
                    <Row className="my-3 px-4">
                      <>
                        {room.lectureHalls.map((hall) => (
                          <Col column sm="3 p-2" key={hall}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions2"
                              value={hall}
                              onChange={(e) => setRoom(e.target.value)}
                            />
                            <label className="form-check-label">{hall}</label>
                          </Col>
                        ))}
                      </>
                    </Row>
                    <h5>Tag base Laboratories </h5>
                    <Row className="my-3 px-4">
                      <>
                        {room.laboratories.map((lab) => (
                          <Col column sm="3 p-2" key={lab}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions2"
                              value={lab}
                              onChange={(e) => setRoom(e.target.value)}
                            />
                            <label className="form-check-label">{lab}</label>
                          </Col>
                        ))}
                      </>
                    </Row>
                  </Card.Body>
                </Card>
              </>
            ))}
          </> */}
          <Card className="mt-5 mb-3">
            <Card.Body>
              <h5>Current Lecture Halls</h5>
              <Row className="my-3 px-4">
                {sortedRooms.map((room) => (
                  <>
                    {room.roomType == "Lecture Hall" && (
                      <Col column sm="3 p-2" key={room}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions2"
                          value={room.roomName}
                          onChange={(e) => setRoom(e.target.value)}
                        />
                        <label className="form-check-label">
                          {room.roomName}
                        </label>
                      </Col>
                    )}
                  </>
                ))}
              </Row>
            </Card.Body>
          </Card>
          <Card className="mt-5 mb-3">
            <Card.Body>
              <h5>Current Laboratories </h5>
              <Row className="my-3 px-4">
                {sortedRooms.map((room) => (
                  <>
                    {room.roomType == "Laboratory" && (
                      <Col column sm="3 p-2" key={room}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions2"
                          value={room.roomName}
                          onChange={(e) => setRoom(e.target.value)}
                        />
                        <label className="form-check-label">
                          {room.roomName}
                        </label>
                      </Col>
                    )}
                  </>
                ))}
              </Row>
            </Card.Body>
          </Card>

          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Session Rooms
              </Button>
            </Col>
          </Row>
        </Form>
        {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
        <Row className="my-3 px-4">
          {sortedConsecutiveSessions.map((session, index) => (
            <>
              {session.room !== "" && (
                <Col column sm="4" key={session._id}>
                  <Card className="mt-5 mb-3" style={{ border: "solid black" }}>
                    <div>
                      <Button
                        variant="btn btn-outline-danger"
                        size="sm"
                        style={{
                          float: "right",
                          border: "none",
                          color: "black",
                        }}
                        onClick={() => deleteConsecutiveSessionRoom(session)}
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-x"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </Button>
                    </div>
                    <Card.Body key={index}>
                      <h5>Consecutive Session {index + 1} </h5>
                      {session.sessions.map((item, index) => (
                        <div>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.lecturers + ""}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.tag}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.group}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.subject}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label
                              className="form-check-label"
                              for="gridCheck1"
                            >
                              {item.stdCount} ({item.duration})
                            </label>
                          </Col>
                        </div>
                      ))}
                      <Col column sm="12">
                        <label className="form-check-label" for="gridCheck1">
                          {session.room}
                        </label>
                      </Col>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AddConsecutiveSessionRoom;

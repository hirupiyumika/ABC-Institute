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
import { LogContext } from "../../../context/context";

const AddSessionRooms = ({}) => {
  const {
    alert,
    primarySessions,
    sortedRooms,
    AddSessionRooms,
    sortedPrimarySessions,
    groupRooms,
    lecturerRooms,
    subjectRooms,
    tagRooms,
    rooms,
  } = useContext(LogContext);
  const [lecturers, setLecturers] = useState([]);
  const [id, setId] = useState("");
  const [tag, setTag] = useState("");
  const [group, setGroup] = useState("");
  const [stdCount, setStdCount] = useState("");
  const [subject, setSubject] = useState("");
  const [code, setCode] = useState("");
  const [duration, setDuration] = useState("");
  const [room, setRoom] = useState("");
  const [sr, setSr] = useState([]);
  const [lr, setLr] = useState([]);
  const [gr, setGr] = useState([]);
  const [tr, setTr] = useState([]);
  const [mr, setMr] = useState([]);
  const [ml, setMl] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    AddSessionRooms({
      lecturers,
      id,
      tag,
      group,
      stdCount,
      subject,
      code,
      duration,
      room,
    });
    setLecturers("");
    setId("");
    setTag("");
    setGroup("");
    setStdCount("");
    setSubject("");
    setCode("");
    setDuration("");
    setRoom("");
  };

  const handleSession = (e, session) => {
    console.log(session);
    filterRooms(session);
    setLecturers(session.lecturers);
    setId(session._id);
    setTag(session.tag);
    setGroup(session.group);
    setStdCount(session.stdCount);
    setSubject(session.subject);
    setCode(session.code);
    setDuration(session.duration);
  };

  const filterRooms = (data) => {
    setSr(
      subjectRooms.filter((s) => s.subject == data.subject && s.tag == data.tag)
    );
    setLr(
      lecturerRooms.filter(
        (l) => l.lecturer == data.lecturers.map((lec) => lec)
      )
    );
    setGr(groupRooms.filter((g) => g.group == data.group));
    setTr(tagRooms.filter((t) => t.tagName == data.tag));

    setMr(
      ((sr.lectureHalls == lr.lectureHalls) == gr.lectureHalls) ==
        tr.lectureHalls
    );
    setMl(
      ((sr.laboratories == lr.laboratories) == gr.laboratories) ==
        tr.laboratories
    );
  };
  console.log("SRq", tr);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Session Rooms</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Form onSubmit={onSubmit}>
          <Card>
            <Card.Body>
              <h5>Current primary Sessions</h5>
              <Row className="my-3 px-4">
                {primarySessions.map((session, index) => (
                  <>
                    {session.room == "" && (
                      <Col column sm="4" key={index}>
                        <Card
                          style={{ background: "green" }}
                          className="mt-5 mb-3 "
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
                          <Card.Body>
                            <h5>Primary Session {index + 1} </h5>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.lecturers + ""}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.tag}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.group}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.subject}({session.code})
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.stdCount} ({session.duration})
                              </label>
                            </Col>
                          </Card.Body>
                        </Card>
                      </Col>
                    )}
                  </>
                ))}
              </Row>
            </Card.Body>
          </Card>

          <>
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
                      {/* </Card.Body>
                  </Card>
                  <Card className="mt-5 mb-3">
                    <Card.Body> */}
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
          </>
          <>
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
                    {/* </Card.Body>
                  </Card>
                  <Card className="mt-5 mb-3">
                    <Card.Body> */}
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
          </>
          <>
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
                    {/* </Card.Body>
                  </Card>
                  <Card className="mt-5 mb-3">
                    <Card.Body> */}
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
          </>
          <>
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
                    {/* </Card.Body>
                  </Card>
                  <Card className="mt-5 mb-3">
                    <Card.Body> */}
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
          </>
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
          {sortedPrimarySessions.map((session, index) => (
            <>
              {session.room !== "" && (
                <Col column sm="4 p-2">
                  <Card
                    className="mt-5 mb-3"
                    key={index}
                    style={{ border: "solid black" }}
                  >
                    <Card.Body>
                      <h5> Session {index + 1} </h5>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.lecturers + ""}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.tag}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.group}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.subject}({session.code})
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.stdCount} ({session.duration})
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
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

export default AddSessionRooms;

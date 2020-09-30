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
  const [lecturers1, setLecturers1] = useState([]);
  const [lecturers2, setLecturers2] = useState([]);
  const [lecturers3, setLecturers3] = useState([]);
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [group1, setGroup1] = useState("");
  const [group2, setGroup2] = useState("");
  const [group3, setGroup3] = useState("");
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [stdCount1, setStdCount1] = useState("");
  const [stdCount2, setStdCount2] = useState("");
  const [stdCount3, setStdCount3] = useState("");
  const [duration1, setDuration1] = useState("");
  const [duration2, setDuration2] = useState("");
  const [duration3, setDuration3] = useState("");
  const [room, setRoom] = useState("");
  // const [sr, setSr] = useState([]);
  // const [lr, setLr] = useState([]);
  // const [gr, setGr] = useState([]);
  // const [tr, setTr] = useState([]);
  // const [mr, setMr] = useState([]);
  // const [ml, setMl] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    AddConsecutiveSessionRoom({
      _id,
      lecturers1,
      lecturers2,
      lecturers3,
      tag1,
      tag2,
      tag3,
      group1,
      group2,
      group3,
      subject1,
      subject2,
      subject3,
      stdCount1,
      stdCount2,
      stdCount3,
      duration1,
      duration2,
      duration3,
      room,
    });
    setId("");
    setLecturers1("");
    setLecturers2("");
    setLecturers3("");
    setTag1("");
    setTag2("");
    setTag3("");
    setGroup1("");
    setGroup2("");
    setGroup3("");
    setSubject1("");
    setSubject2("");
    setSubject3("");
    setStdCount1("");
    setStdCount2("");
    setStdCount3("");
    setDuration1("");
    setDuration2("");
    setDuration3("");
    setRoom("");
  };

  const handleSession = (e, session) => {
    console.log(session);
    // filterRooms(session);
    setId(session._id);
    setLecturers1(session.lecturers1);
    setLecturers2(session.lecturers2);
    setLecturers3(session.lecturers3);
    setTag1(session.tag1);
    setTag2(session.tag2);
    setTag3(session.tag3);
    setGroup1(session.group1);
    setGroup2(session.group2);
    setGroup3(session.group3);
    setSubject1(session.subject1);
    setSubject2(session.subject2);
    setSubject3(session.subject3);
    setStdCount1(session.stdCount1);
    setStdCount2(session.stdCount2);
    setStdCount3(session.stdCount3);
    setDuration1(session.duration1);
    setDuration2(session.duration2);
    setDuration3(session.duration3);
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
                            <h5>Consecutive Session {index + 1} </h5>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.lecturers1 + ""}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.tag1}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.subject1}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.stdCount1} ({session.duration1})
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.lecturers2 + ""}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.tag2}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.subject2}
                              </label>
                            </Col>
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.stdCount2} ({session.duration2})
                              </label>
                            </Col>
                            {session.tag3 !== "" && (
                              <>
                                <Col column sm="12">
                                  <label className="form-check-label">
                                    {session.lecturers3 + ""}
                                  </label>
                                </Col>
                                <Col column sm="12">
                                  <label className="form-check-label">
                                    {session.tag3}
                                  </label>
                                </Col>
                                <Col column sm="12">
                                  <label className="form-check-label">
                                    {session.subject3}
                                  </label>
                                </Col>
                                <Col column sm="12">
                                  <label className="form-check-label">
                                    {session.stdCount3} ({session.duration3})
                                  </label>
                                </Col>
                              </>
                            )}
                            <Col column sm="12">
                              <label className="form-check-label">
                                {session.group1}
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
                <Col column sm="4 p-2">
                  <Card
                    className="mt-5 mb-3"
                    key={index}
                    style={{ border: "solid black" }}
                  >
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
                    <Card.Body>
                      <h5> Consecutive Session {index + 1} </h5>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.lecturers1 + ""}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.tag1}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.subject1}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.stdCount1} ({session.duration1})
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.lecturers2 + ""}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.tag2}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.subject2}
                        </label>
                      </Col>
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.stdCount2} ({session.duration2})
                        </label>
                      </Col>
                      {session.tag3 !== "" && (
                        <>
                          <Col column sm="12">
                            <label className="form-check-label">
                              {session.lecturers3 + ""}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label className="form-check-label">
                              {session.tag3}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label className="form-check-label">
                              {session.subject3}
                            </label>
                          </Col>
                          <Col column sm="12">
                            <label className="form-check-label">
                              {session.stdCount3} ({session.duration3})
                            </label>
                          </Col>
                        </>
                      )}
                      <Col column sm="12">
                        <label className="form-check-label">
                          {session.group1}
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

export default AddConsecutiveSessionRoom;

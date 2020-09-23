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
  Table,
} from "react-bootstrap";
import { LogConsumer, LogContext } from "../../../context/context";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const AddLecturerRooms = ({}) => {
  const {
    sortedLecturers,
    sortedRooms,
    AddLecturerRooms,
    lecturerRooms,
    alert,
  } = useContext(LogContext);
  const [lecturer, setLecturer] = useState("");
  const [lecturerID, setId] = useState("");
  const [lectureHalls, setLectureHalls] = useState("");
  const [laboratories, setLaboratories] = useState("");
  // const [eid, setEid] = useState("");
  // const [faculty, setFaculty] = useState("");
  // const [department, setDepartment] = useState("");
  // const [center, setCenter] = useState("");
  // const [building, setBuilding] = useState("");
  // const [level, setLevel] = useState("");
  // const [rank, setRank] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    AddLecturerRooms({
      lecturerID,
      lecturer,
      lectureHalls,
      laboratories,
      // eid,
      // faculty,
      // department,
      // center,
      // building,
      // level,
      // rank,
    });
    setId("");
    setLecturer("");
    setLectureHalls("");
    setLaboratories("");
    // setEid("");
    // setFaculty("");
    // setDepartment("");
    // setCenter("");
    // setBuilding("");
    // setLevel("");
    // setRank("");
  };

  const handleLectureHalls = (e) => {
    setLectureHalls([...lectureHalls, e.target.value]);
  };

  const handleLaboratories = (e) => {
    setLaboratories([...laboratories, e.target.value]);
  };

  const handleLecturer = (e, lec) => {
    setId(lec._id);
    setLecturer(e.target.value);
    // setEid(lec.eid);
    // setFaculty(lec.faculty);
    // setDepartment(lec.department);
    // setCenter(lec.center);
    // setBuilding(lec.building);
    // setLevel(lec.level);
    // setRank(lec.rank);
  };

  //   return (
  // <LogConsumer>
  //   {(value) => {
  //     const { levels, alert, deleteLevel } = value;
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Lecturer Rooms</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Form onSubmit={onSubmit}>
          <Card className="mt-5 mb-3">
            <Card.Body>
              <h5>Current Lecturers</h5>
              <Row className="my-3 px-4">
                {sortedLecturers.map((lec) => (
                  <Col column sm="3 p-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions2"
                      value={lec.name}
                      //   onChange={(e) => setLecturer(e.target.value)}
                      onChange={(e) => handleLecturer(e, lec)}
                    />
                    <label class="form-check-label" for="gridCheck1">
                      {lec.name}
                    </label>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
          <Card className="mt-5 mb-3">
            <Card.Body>
              <h5>Current Lecture Halls</h5>
              <Row className="my-3 px-4">
                {sortedRooms.map((room) => (
                  <>
                    {room.roomType == "Lecture Hall" && (
                      <Col column sm="3 p-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value={room.roomName}
                          onChange={(e) => handleLectureHalls(e)}
                        />
                        <label class="form-check-label" for="gridCheck1">
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
                      <Col column sm="3 p-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value={room.roomName}
                          onChange={(e) => handleLaboratories(e)}
                        />
                        <label class="form-check-label" for="gridCheck1">
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
                Add Lecturer Rooms
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>
        {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
        <Table>
          <thead>
            <tr>
              <th>Lecturer</th>
              <th>Lecture Halls</th>
              <th>Laboratories</th>
              <th>Added Date</th>
              <th>Added Time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lecturerRooms.map((lec) => (
              <>
                {(lec.lectureHalls.length > 0 ||
                  lec.laboratories.length > 0) && (
                  <tr>
                    <td>{lec.lecturer}</td>
                    {lec.lectureHalls == "" ? (
                      <td>No Lecture Halls</td>
                    ) : (
                      <td>{lec.lectureHalls + ""}</td>
                    )}
                    {lec.laboratories == "" ? (
                      <td>No Laboratories</td>
                    ) : (
                      <td>{lec.laboratories + ""}</td>
                    )}
                    <td>
                      <Moment format="DD/MM/YYYY">
                        {new Date(lec.created)}
                      </Moment>
                    </td>
                    <td>
                      <Moment format="h:mm:ss a">
                        {new Date(lec.created)}
                      </Moment>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AddLecturerRooms;

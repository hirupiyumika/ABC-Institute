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
import { StudentContext } from "../../../context/StudentContext";

const AddSubjectRooms = ({}) => {
  const {
    sortedRooms,
    sortedSubjects,
    alert,
    AddSubjectRooms,
    subjectRooms,
    deleteSubjectRoom,
  } = useContext(LogContext);
  const { sortedTags } = useContext(StudentContext);
  const [subjectID, setSubjectID] = useState("");
  const [subject, setSubject] = useState("");
  const [tag, setTag] = useState("");
  const [lectureHalls, setLectureHalls] = useState("");
  const [laboratories, setLaboratories] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    AddSubjectRooms({
      subjectID,
      subject,
      tag,
      lectureHalls,
      laboratories,
    });
    setSubjectID("");
    setSubject("");
    setTag("");
    setLectureHalls("");
    setLaboratories("");
  };

  const handleLectureHalls = (e) => {
    setLectureHalls([...lectureHalls, e.target.value]);
  };

  const handleLaboratories = (e) => {
    setLaboratories([...laboratories, e.target.value]);
  };

  const handleSubject = (e, sub) => {
    setSubjectID(sub._id);
    setSubject(sub.subject);
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Subject-Rooms</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Form onSubmit={onSubmit}>
          <Card className="mt-5 mb-3">
            <Card.Body>
              <h5>Current Subjects</h5>
              <Row className="my-3 px-4">
                {sortedSubjects.map((sub) => (
                  <Col column sm="3 p-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions1"
                      value={sub.subject}
                      //   onChange={(e) => setLecturer(e.target.value)}
                      onChange={(e) => handleSubject(e, sub)}
                    />
                    <label class="form-check-label" for="gridCheck1">
                      {sub.subject}
                    </label>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
          <Card className="mt-5 mb-3">
            <Card.Body>
              <h5>Current Tags</h5>
              <Row className="my-3 px-4">
                {sortedTags.map((tag) => (
                  <Col column sm="3 p-2">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions2"
                      value={tag.tag}
                      //   onChange={(e) => setLecturer(e.target.value)}
                      onChange={(e) => setTag(e.target.value)}
                    />
                    <label class="form-check-label" for="gridCheck1">
                      {tag.tag}
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
                Add Subject-Rooms
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
              <th>Subject</th>
              <th>Tag</th>
              <th>Lecture Halls</th>
              <th>Laboratories</th>
              <th>Added Date</th>
              <th>Added Time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subjectRooms.map((sub) => (
              <>
                <tr>
                  <td>{sub.subject}</td>
                  <td>{sub.tag}</td>
                  {sub.lectureHalls == "" ? (
                    <td>No Lecture Halls</td>
                  ) : (
                    <td>{sub.lectureHalls + ""}</td>
                  )}
                  {sub.laboratories == "" ? (
                    <td>No Laboratories</td>
                  ) : (
                    <td>{sub.laboratories + ""}</td>
                  )}
                  <td>
                    <Moment format="DD/MM/YYYY">{new Date(sub.created)}</Moment>
                  </td>
                  <td>
                    <Moment format="h:mm:ss a">{new Date(sub.created)}</Moment>
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
                      onClick={() => deleteSubjectRoom(sub._id)}
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
              </>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AddSubjectRooms;

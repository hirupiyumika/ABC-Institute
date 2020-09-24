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

const AddTagRooms = ({}) => {
  const { sortedRooms, AddTagRooms, tagRooms, alert } = useContext(LogContext);
  const { sortedTags } = useContext(StudentContext);
  const [tagID, setTagID] = useState("");
  const [tagName, setTagName] = useState("");
  const [lectureHalls, setLectureHalls] = useState("");
  const [laboratories, setLaboratories] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    AddTagRooms({
      tagID,
      tagName,
      lectureHalls,
      laboratories,
    });
    setId("");
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

  const handleTag = (e, tag) => {
    setTagID(tag._id);
    setTagName(tag.tag);
  };

  //   return (
  // <LogConsumer>
  //   {(value) => {
  //     const { levels, alert, deleteLevel } = value;
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Tag-Rooms</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Form onSubmit={onSubmit}>
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
                      onChange={(e) => handleTag(e, tag)}
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
                Add Tag-Rooms
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
            {tagRooms.map((tag) => (
              <>
                <tr>
                  <td>{tag.tagName}</td>
                  {tag.lectureHalls == "" ? (
                    <td>No Lecture Halls</td>
                  ) : (
                    <td>{tag.lectureHalls + ""}</td>
                  )}
                  {tag.laboratories == "" ? (
                    <td>No Laboratories</td>
                  ) : (
                    <td>{tag.laboratories + ""}</td>
                  )}
                  <td>
                    <Moment format="DD/MM/YYYY">
                      {new Date(tag.createdDate)}
                    </Moment>
                  </td>
                  <td>
                    <Moment format="h:mm:ss a">
                      {new Date(tag.createdDate)}
                    </Moment>
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

export default AddTagRooms;

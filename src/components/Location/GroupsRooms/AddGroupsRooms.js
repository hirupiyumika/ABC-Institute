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

const AddGroupsRooms = ({}) => {
  const { sortedRooms, AddGroupsRooms, alert, groupRooms } = useContext(
    LogContext
  );
  const { sortedStudents } = useContext(StudentContext);
  const [_id, setId] = useState("");
  const [type, setType] = useState("");
  const [group, setGroup] = useState("");
  //   const [academicYearAndSemester, setAcademicYearAndSemester] = useState("");
  //   const [programme, setProgramme] = useState("");
  //   const [mainGroup, setMainGroup] = useState("");
  const [mainGroupID, setMainGroupID] = useState("");
  //   const [subGroup, setSubGroup] = useState("");
  const [subGroupID, setSubGroupID] = useState("");
  const [lectureHalls, setLectureHalls] = useState("");
  const [laboratories, setLaboratories] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    AddGroupsRooms({
      //   _id,
      //   type,
      group,
      //   academicYearAndSemester,
      //   programme,
      //   mainGroup,
      //   mainGroupID,
      //   subGroup,
      //   subGroupID,
      lectureHalls,
      laboratories,
    });
    setId("");
    setType("");
    setGroup("");
    // setAcademicYearAndSemester("");
    // setProgramme("");
    // setMainGroup("");
    setMainGroupID("");
    // setSubGroup("");
    setSubGroupID("");
    setLectureHalls("");
    setLaboratories("");
  };

  const handleLectureHalls = (e) => {
    setLectureHalls([...lectureHalls, e.target.value]);
    // setLectureHalls(e.target.value);
  };

  const handleLaboratories = (e) => {
    setLaboratories([...laboratories, e.target.value]);
    // console.log("e", laboratories);
  };

  const handleGroups = (e, grp) => {
    // setId(grp._id);
    // setAcademicYearAndSemester(grp.academicYearAndSemester);
    setGroup(grp.mainGroupID);
    // setProgramme(grp.programme);
    // setMainGroup(grp.mainGroup);
    // setMainGroupID(grp.mainGroupID);
    // setSubGroup(grp.subGroup);
    // setSubGroupID(grp.subGroupID);
    // setLaboratories(grp.laboratories);
  };

  const handleSubGroups = (e, grp) => {
    // setId(grp._id);
    // setAcademicYearAndSemester(grp.academicYearAndSemester);
    setGroup(grp.subGroupID);
    // setProgramme(grp.programme);
    // setMainGroup(grp.mainGroup);
    // setMainGroupID(grp.mainGroupID);
    // setSubGroup(grp.subGroup);
    // setSubGroupID(grp.subGroupID);
    // setLectureHalls(grp.lectureHalls);
  };

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
              <h5>Group Type</h5>
              <Col>
                <Form.Control
                  as="select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="none">Select Group Type</option>
                  <option value="Main Groups">Main Groups</option>
                  <option value="Sub-Groups">Sub-Groups</option>
                </Form.Control>
              </Col>
            </Card.Body>
          </Card>
          <Card className="mt-5 mb-3">
            <Card.Body>
              <h5>
                {(type == "" || type == "none" || type == "none") &&
                  "Current Groups / Sub-Groups"}
                {type == "Main Groups" && "Current Groups "}
                {type == "Sub-Groups" && "Current Sub-Groups"}
              </h5>
              <Row className="my-3 px-4">
                {sortedStudents.map((grp) => (
                  <>
                    {(type == "" ||
                      type == "none" ||
                      type == "Main Groups") && (
                      <Col column sm="3 p-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions2"
                          value={grp.mainGroupID}
                          onChange={(e) => handleGroups(e, grp)}
                        />
                        <label class="form-check-label" for="gridCheck1">
                          {grp.mainGroupID}
                        </label>
                      </Col>
                    )}
                    {(type == "" || type == "none" || type == "Sub-Groups") && (
                      <Col column sm="3 p-2">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions2"
                          value={grp.subGroupID}
                          onChange={(e) => handleSubGroups(e, grp)}
                        />
                        <label class="form-check-label" for="gridCheck1">
                          {grp.subGroupID}
                        </label>
                      </Col>
                    )}
                  </>
                ))}
              </Row>
            </Card.Body>
          </Card>
          {(type == "" || type == "none" || type == "Main Groups") && (
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
          )}
          {(type == "" || type == "none" || type == "Sub-Groups") && (
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
          )}
          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Groups-Rooms
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
              <th>Groups / Sub-Groups</th>
              {/* <th></th> */}
              <th>Lecture Halls</th>
              <th>Laboratories</th>
              <th>Added Date</th>
              <th>Added Time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {groupRooms.map((grp) => (
              <>
                <tr>
                  <td>{grp.group}</td>
                  {grp.lectureHalls == "" ? (
                    <td>No Lecture Halls</td>
                  ) : (
                    <td>{grp.lectureHalls + ""}</td>
                  )}
                  {grp.laboratories == "" ? (
                    <td>No Laboratories</td>
                  ) : (
                    <td>{grp.laboratories + ""} </td>
                  )}
                  <td>
                    <Moment format="DD/MM/YYYY">{new Date(grp.created)}</Moment>
                  </td>
                  <td>
                    <Moment format="h:mm:ss a">{new Date(grp.created)}</Moment>
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

export default AddGroupsRooms;

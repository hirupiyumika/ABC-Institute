import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { LogConsumer, LogContext } from "../../context/context";
import LecturerTableBody from "./LecturtrTableBody";

const EditLecturer = () => {
  const {
    faculties,
    centers,
    departments,
    buildings,
    levels,
    lecturer,
    updateLecturer,
  } = useContext(LogContext);

  const [_id, setId] = useState(lecturer[0]._id);
  const [name, setName] = useState(lecturer[0].name);
  const [eid, setEid] = useState(lecturer[0].eid);
  const [faculty, setFaculty] = useState(lecturer[0].faculty);
  const [department, setDepartment] = useState(lecturer[0].department);
  const [center, setCenter] = useState(lecturer[0].center);
  const [building, setBuilding] = useState(lecturer[0].building);
  const [level, setLevel] = useState(lecturer[0].level);
  const [rank, setRank] = useState(lecturer[0].rank);
  // const [rooms, setRooms] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateLecturer({
      _id,
      name,
      eid,
      faculty,
      department,
      center,
      building,
      level,
      rank,
      // rooms,
    });
    setId("");
    setName("");
    setEid("");
    setFaculty("");
    setDepartment("");
    setCenter("");
    setBuilding("");
    setLevel("");
    setRank("");
    // setRooms([]);
  };
  return (
    <LogConsumer>
      {(value) => {
        const { lecturers, alert, deleteLecturer } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Update Lecturer</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <Card className="mt-5 mb-3">
                <Card.Body>
                  <Form onSubmit={onSubmit}>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          placeholder="Enter Lecturer Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          placeholder="Enter Employee ID"
                          value={eid}
                          onChange={(e) => setEid(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          as="select"
                          value={faculty}
                          onChange={(e) => setFaculty(e.target.value)}
                        >
                          <option value="none">Select Faculty</option>
                          {faculties.map((faculty) => (
                            <option key={faculty._id} value={faculty.faculty}>
                              {faculty.faculty}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                        >
                          <option value="none">Select Department</option>
                          {departments.map((department) => (
                            <option
                              key={department._id}
                              value={department.department}
                            >
                              {department.department}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          as="select"
                          value={center}
                          onChange={(e) => setCenter(e.target.value)}
                        >
                          <option value="none">Select Center</option>
                          {centers.map((center) => (
                            <option key={center._id} value={center.center}>
                              {center.center}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
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
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Form.Control
                          as="select"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                        >
                          <option value="none">Select Level</option>
                          {levels.map((level) => (
                            <option key={level._id} value={level.level}>
                              {level.category}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col>
                        <Form.Control
                          placeholder="Rank"
                          value={rank}
                          onChange={(e) => setRank(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col>
                        <Button type="submit" variant="secondary" block>
                          Update Lecturer
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
                    <th>Name</th>
                    <th>ID</th>
                    <th>Faculty</th>
                    <th>Department</th>
                    <th>Center</th>
                    <th>Building</th>
                    <th>Level</th>
                    <th>Rank</th>
                    <th>Create</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {lecturers.map((lec) => (
                    <LecturerTableBody
                      key={lec.eid}
                      lec={lec}
                      deleteLecturer={deleteLecturer}
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

export default EditLecturer;

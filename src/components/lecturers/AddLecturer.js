import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";

const AddLecturer = ({}) => {
  const {
    faculties,
    centers,
    departments,
    buildings,
    levels,
    addLecturer,
  } = useContext(LogContext);

  const [name, setName] = useState("");
  const [eid, setEid] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [center, setCenter] = useState("");
  const [building, setBuilding] = useState("");
  const [level, setLevel] = useState("");
  const [rank, setRank] = useState("");
  // const [rooms, setRooms] = useState([]);

  const onSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    addLecturer({
      name,
      eid,
      faculty,
      department,
      center,
      building,
      level,
      rank: `${level}${"." + eid}`,
      // rooms,
    });
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
                  <option key={department._id} value={department.department}>
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
                  <option key={building._id} value={building.building}>
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
                value={`${level}.${eid}`}
                onChange={(e) => setRank(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Lecturer
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddLecturer;

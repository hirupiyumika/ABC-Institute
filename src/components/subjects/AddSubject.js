import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddSubject = ({ addSubject }) => {
  const [subject, setSubject] = useState("");
  const [code, setCode] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [lectureHours, setLectureHours] = useState("");
  const [tutorialHours, setTutorialHours] = useState("");
  const [labHours, setLabHours] = useState("");
  const [evolutionHours, setEvolutionHours] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addSubject({
      subject,
      code,
      year,
      semester,
      lectureHours,
      tutorialHours,
      labHours,
      evolutionHours,
    });
    setSubject("");
    setCode("");
    setYear("");
    setSemester("");
    setLectureHours("");
    setTutorialHours("");
    setLabHours("");
    setEvolutionHours("");
  };
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Enter Subject Name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Enter Subject Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Enter Offered Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                as="select"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option value="none">Select Offered Semester</option>
                <option value="Semester - I">Semester - I</option>
                <option value="Semester - II">Semester - II</option>
              </Form.Control>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Select Lecture-Hours"
                type="number"
                min="0"
                max="5"
                value={lectureHours}
                onChange={(e) => setLectureHours(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Select Tutorial-Hours"
                type="number"
                min="0"
                max="5"
                value={tutorialHours}
                onChange={(e) => setTutorialHours(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Select Lab-Hours"
                type="number"
                min="0"
                max="5"
                value={labHours}
                onChange={(e) => setLabHours(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Select Evolution-Hours"
                type="number"
                min="0"
                max="5"
                value={evolutionHours}
                onChange={(e) => setEvolutionHours(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Subject
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddSubject;

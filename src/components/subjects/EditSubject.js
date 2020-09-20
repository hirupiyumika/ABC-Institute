import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LogConsumer, LogContext } from "../../context/context";
import SubjectTableBody from "./SubjectTableBody";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const EditSubject = () => {
  const { sub, updateSubject } = useContext(LogContext);
  const [_id, setId] = useState(sub[0]._id);
  const [subject, setSubject] = useState(sub[0].subject);
  const [code, setCode] = useState(sub[0].code);
  const [year, setYear] = useState(sub[0].year);
  const [semester, setSemester] = useState(sub[0].semester);
  const [lectureHours, setLectureHours] = useState(sub[0].lectureHours);
  const [tutorialHours, setTutorialHours] = useState(sub[0].tutorialHours);
  const [labHours, setLabHours] = useState(sub[0].labHours);
  const [evolutionHours, setEvolutionHours] = useState(sub[0].evolutionHours);

  const onSubmit = (e) => {
    e.preventDefault();
    updateSubject({
      _id,
      subject,
      code,
      year,
      semester,
      lectureHours,
      tutorialHours,
      labHours,
      evolutionHours,
    });
    setId("");
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
    <LogConsumer>
      {(value) => {
        const { subjects, alert, deleteSubject } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Update Subject</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
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
                          Update Subject
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
                    <th>Subject</th>
                    <th>Code</th>
                    <th>Offered Year</th>
                    <th>Offered Semester</th>
                    <th>Lecture Hours</th>
                    <th>Tutorial Hours</th>
                    <th>Lab Hours</th>
                    <th>Evolution Hours</th>
                    <th>Create</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((sub) => (
                    <SubjectTableBody
                      key={sub.code}
                      sub={sub}
                      deleteSubject={deleteSubject}
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

export default EditSubject;

// IT18233704 -  N.R Yamasinghe
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddAcademicYearAndSemesterForm = ({ addAcademicYearAndSemester }) => {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addAcademicYearAndSemester({
      year,
      semester,
      yearAndSemester: `${year}.${semester}`,
    });
    setYear("");
    setSemester("");
  };
  return (
    <Card className="mt-5 mb-3">
      <Card.Body>
        <Form onSubmit={onSubmit}>
          <Row className="my-3">
            <Col>
              <Form.Control
                placeholder="Academic Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                placeholder="Semester"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Button type="submit" variant="secondary" block>
                Add Academic Year And Semester
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddAcademicYearAndSemesterForm;

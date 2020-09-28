// IT18233704 -  N.R Yamasinghe
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { StudentConsumer } from "./../../context/StudentContext";

const UpdateAcademicYearAndSemesterForm = ({
  updateAcademicYearAndSemester,
  filteredacademicYearAndSemester,
}) => {
  const [year, setYear] = useState(filteredacademicYearAndSemester[0].year);
  const [semester, setSemester] = useState(
    filteredacademicYearAndSemester[0].semester
  );
  const [_id, set_id] = useState(filteredacademicYearAndSemester[0]._id);

  const onSubmit = (e) => {
    e.preventDefault();
    updateAcademicYearAndSemester({
      _id,
      year,
      semester,
      yearAndSemester: `${year}.${semester}`,
    });
    setYear("");
    setSemester("");
    set_id("");
  };
  return (
    <StudentConsumer>
      {(value) => {
        const { filteredacademicYearAndSemester } = value;

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
                    <Form.Control
                      hidden
                      value={filteredacademicYearAndSemester[0]._id}
                      onChange={(e) => set_id(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Button type="submit" variant="secondary" block>
                      Update Academic Year And Semester
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        );
      }}
    </StudentConsumer>
  );
};

export default UpdateAcademicYearAndSemesterForm;

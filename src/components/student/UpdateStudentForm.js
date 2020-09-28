// IT18233704 -  N.R Yamasinghe
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { StudentConsumer } from "../../context/StudentContext";

const UpdateStudentForm = ({
  updateStudent,
  filteredStudent,
  academicYearAndSemesters,
  programmes,
  groups,
  subGroups,
}) => {
  const [academicYearAndSemester, setAcademicYearAndSemester] = useState(
    filteredStudent[0].academicYearAndSemester
  );
  const [programme, setProgramme] = useState(filteredStudent[0].programme);
  const [mainGroup, setMainGroup] = useState(filteredStudent[0].mainGroup);
  const [mainGroupID, setMainGroupID] = useState(
    filteredStudent[0].mainGroupID
  );
  const [subGroup, setSubGroup] = useState(filteredStudent[0].subGroup);
  const [subGroupID, setSubGroupID] = useState(filteredStudent[0].subGroupID);
  const [_id, set_id] = useState(filteredStudent[0]._id);

  const onSubmit = (e) => {
    e.preventDefault();
    updateStudent({
      _id,
      academicYearAndSemester,
      programme,
      mainGroup,
      mainGroupID: `${academicYearAndSemester}.${programme}.${mainGroup}`,
      subGroup,
      subGroupID: `${academicYearAndSemester}.${programme}.${mainGroup}.${subGroup}`,
    });
    setAcademicYearAndSemester("");
    setProgramme("");
    setMainGroup("");
    setMainGroupID("");
    setSubGroup("");
    setSubGroupID("");
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
                      as="select"
                      value={academicYearAndSemester}
                      onChange={(e) =>
                        setAcademicYearAndSemester(e.target.value)
                      }
                    >
                      <option value="0">Select Year & Semester</option>
                      {academicYearAndSemesters.map(
                        (academicYearAndSemester) => (
                          <option
                            key={academicYearAndSemester._id}
                            value={academicYearAndSemester.yearAndSemester}
                          >
                            {academicYearAndSemester.yearAndSemester}
                          </option>
                        )
                      )}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={programme}
                      onChange={(e) => setProgramme(e.target.value)}
                    >
                      <option value="0">Select Programme</option>
                      {programmes.map((programme) => (
                        <option key={programme._id} value={programme.programme}>
                          {programme.programme}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Form.Control
                      as="select"
                      value={mainGroup}
                      onChange={(e) => setMainGroup(e.target.value)}
                    >
                      <option value="0">Select Main Group</option>
                      {groups.map((group) => (
                        <option key={group._id} value={group.group}>
                          {group.group}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Main Group ID"
                      value={`${academicYearAndSemester}.${programme}.${mainGroup}`}
                      onChange={(e) =>
                        setMainGroupID(
                          `${academicYearAndSemester}.${programme}.${mainGroup}`
                        )
                      }
                    />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Form.Control
                      as="select"
                      value={subGroup}
                      onChange={(e) => setSubGroup(e.target.value)}
                    >
                      <option value="0">Select Sub Group</option>
                      {subGroups.map((subGroup) => (
                        <option key={subGroup._id} value={subGroup.subGroup}>
                          {subGroup.subGroup}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Sub Group ID"
                      value={`${academicYearAndSemester}.${programme}.${mainGroup}.${subGroup}`}
                      onChange={(e) =>
                        setSubGroupID(
                          `${academicYearAndSemester}.${programme}.${mainGroup}.${subGroup}`
                        )
                      }
                    />
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Button type="submit" variant="secondary" block>
                      Update Student
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

export default UpdateStudentForm;

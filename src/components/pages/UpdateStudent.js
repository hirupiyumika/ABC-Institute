// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UpdateStudentForm from "./../forms/UpdateStudentForm";
import StudentTable from "./../tables/StudentTable";
import { StudentContext } from "./../../context/StudentContext";

class UpdateStudent extends Component {
  static contextType = StudentContext;

  render() {
    const {
      updateStudent,
      show,
      variant,
      message,
      filteredStudent,
      academicYearAndSemesters,
      programmes,
      groups,
      subGroups,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Update Student</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateStudentForm
            updateStudent={updateStudent}
            filteredStudent={filteredStudent}
            academicYearAndSemesters={academicYearAndSemesters}
            programmes={programmes}
            groups={groups}
            subGroups={subGroups}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <StudentTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateStudent;

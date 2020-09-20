// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "./../../context/StudentContext";
import AddStudentForm from "./../forms/AddStudentForm";
import StudentTable from "./../tables/StudentTable";

class AddStudent extends Component {
  static contextType = StudentContext;

  render() {
    const {
      addStudent,
      show,
      variant,
      message,
      academicYearAndSemesters,
      programmes,
      groups,
      subGroups,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Student</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddStudentForm
            addStudent={addStudent}
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

export default AddStudent;

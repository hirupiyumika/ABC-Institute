// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
import AcademicYearAndSemesterTable from "./../academicYearAndSemester/AcademicYearAndSemesterTable";
import AddAcademicYearAndSemesterForm from "./../academicYearAndSemester/AddAcademicYearAndSemesterForm";
import { StudentContext } from "./../../context/StudentContext";

class AddAcademicYearAndSemester extends Component {
  static contextType = StudentContext;

  render() {
    const { addAcademicYearAndSemester, show, variant, message } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Academic Year & Semester</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddAcademicYearAndSemesterForm
            addAcademicYearAndSemester={addAcademicYearAndSemester}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <AcademicYearAndSemesterTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddAcademicYearAndSemester;

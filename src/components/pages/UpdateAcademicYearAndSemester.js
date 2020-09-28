// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AcademicYearAndSemesterTable from "./../academicYearAndSemester/AcademicYearAndSemesterTable";
import UpdateAcademicYearAndSemesterForm from "./../academicYearAndSemester/UpdateAcademicYearAndSemesterForm";
import { StudentContext } from "./../../context/StudentContext";

class UpdateAcademicYearAndSemester extends Component {
  static contextType = StudentContext;

  render() {
    const {
      updateAcademicYearAndSemester,
      show,
      variant,
      message,
      filteredacademicYearAndSemester,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Update Academic Year & Semester
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateAcademicYearAndSemesterForm
            updateAcademicYearAndSemester={updateAcademicYearAndSemester}
            filteredacademicYearAndSemester={filteredacademicYearAndSemester}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <AcademicYearAndSemesterTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateAcademicYearAndSemester;

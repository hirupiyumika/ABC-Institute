// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AcademicYearAndSemesterTable from "./../academicYearAndSemester/AcademicYearAndSemesterTable";

class ViewAcademicYearAndSemester extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            View Academic Year & Semesters
          </Breadcrumb.Item>
        </Breadcrumb>
        <AcademicYearAndSemesterTable />
      </React.Fragment>
    );
  }
}

export default ViewAcademicYearAndSemester;

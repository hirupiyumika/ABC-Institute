// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import StudentTable from "./../student/StudentTable";

class ViewStudent extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Students</Breadcrumb.Item>
        </Breadcrumb>
        <StudentTable />
      </React.Fragment>
    );
  }
}

export default ViewStudent;

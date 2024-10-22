// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import LecturerNotAvailableTimeTable from "./../lecturerNotAvailableTime/LecturerNotAvailableTimeTable";

class ViewLecturerNotAvailableTime extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            View Lecturer Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <LecturerNotAvailableTimeTable />
      </React.Fragment>
    );
  }
}

export default ViewLecturerNotAvailableTime;

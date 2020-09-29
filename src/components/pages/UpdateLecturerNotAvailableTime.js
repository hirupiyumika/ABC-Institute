// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "./../../context/StudentContext";
import LecturerNotAvailableTimeTable from "./../lecturerNotAvailableTime/LecturerNotAvailableTimeTable";
import UpdateLecturerNotAvailableTimeForm from "./../lecturerNotAvailableTime/UpdateLecturerNotAvailableTimeForm";

class UpdateLecturerNotAvailableTime extends Component {
  static contextType = StudentContext;

  render() {
    const {
      updateLecturerNotAvailableTime,
      filteredLecturersNotAvailableTime,
      show,
      variant,
      message,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Update Lecturer Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateLecturerNotAvailableTimeForm
            updateLecturerNotAvailableTime={updateLecturerNotAvailableTime}
            filteredLecturersNotAvailableTime={
              filteredLecturersNotAvailableTime
            }
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <LecturerNotAvailableTimeTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateLecturerNotAvailableTime;

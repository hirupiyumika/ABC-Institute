// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "./../../context/StudentContext";
import GroupTable from "./../mainGroup/GroupTable";
import AddLecturerNotAvailableTimeForm from "../lecturerNotAvailableTime/AddLecturerNotAvailableTimeForm";

class AddLecturerNotAvailableTime extends Component {
  static contextType = StudentContext;

  render() {
    const {
      addLecturerNotAvailableTime,
      show,
      variant,
      message,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Group</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddLecturerNotAvailableTimeForm
            addLecturerNotAvailableTime={addLecturerNotAvailableTime}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <GroupTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddLecturerNotAvailableTime;

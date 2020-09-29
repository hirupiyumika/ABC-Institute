// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "../../context/StudentContext";
import UpdateSubGroupNotAvailableTimeForm from "./../subGroupNotAvailableTime/UpdateSubGroupNotAvailableTimeForm";
import SubGroupNotAvailableTimeTable from "./../subGroupNotAvailableTime/SubGroupNotAvailableTimeTable";

class UpdateSubGroupNotAvailableTime extends Component {
  static contextType = StudentContext;

  render() {
    const {
      updateSubGroupNotAvailableTime,
      show,
      variant,
      message,
      filteredSubGroupsNotAvailableTime,
    } = this.context;
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Update Sub Group Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateSubGroupNotAvailableTimeForm
            updateSubGroupNotAvailableTime={updateSubGroupNotAvailableTime}
            filteredSubGroupsNotAvailableTime={
              filteredSubGroupsNotAvailableTime
            }
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <SubGroupNotAvailableTimeTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateSubGroupNotAvailableTime;

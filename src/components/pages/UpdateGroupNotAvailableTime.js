// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "../../context/StudentContext";
import UpdateGroupNotAvailableTimeForm from "./../groupNotAvailableTime/UpdateGroupNotAvailableTimeForm";
import GroupNotAvailableTimeTable from "./../groupNotAvailableTime/GroupNotAvailableTimeTable";

class UpdateGroupNotAvailableTime extends Component {
  static contextType = StudentContext;

  render() {
    const {
      updateGroupNotAvailableTime,
      show,
      variant,
      message,
      filteredGroupsNotAvailableTime,
    } = this.context;
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Update Group Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateGroupNotAvailableTimeForm
            updateGroupNotAvailableTime={updateGroupNotAvailableTime}
            filteredGroupsNotAvailableTime={filteredGroupsNotAvailableTime}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <GroupNotAvailableTimeTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateGroupNotAvailableTime;

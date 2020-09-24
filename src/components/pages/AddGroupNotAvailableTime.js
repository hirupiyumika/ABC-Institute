// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "../../context/StudentContext";
import GroupTable from "../tables/GroupTable";
import AddGroupNotAvailableTimeForm from "../groupNotAvailableTime/AddGroupNotAvailableTimeForm";

class AddGroupNotAvailableTime extends Component {
  static contextType = StudentContext;

  render() {
    const { addGroupNotAvailableTime, show, variant, message } = this.context;
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Group Not Available Time</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddGroupNotAvailableTimeForm
            addGroupNotAvailableTime={addGroupNotAvailableTime}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <GroupTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddGroupNotAvailableTime;

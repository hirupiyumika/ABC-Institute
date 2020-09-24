// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "../../context/StudentContext";
import GroupTable from "../tables/GroupTable";
import AddSubGroupNotAvailableTimeForm from "./../subGroupNotAvailableTime/AddSubGroupNotAvailableTimeForm";

class AddSubGroupNotAvailableTime extends Component {
  static contextType = StudentContext;

  render() {
    const {
      addSubGroupNotAvailableTime,
      show,
      variant,
      message,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Add Sub Group Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddSubGroupNotAvailableTimeForm
            addSubGroupNotAvailableTime={addSubGroupNotAvailableTime}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <GroupTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddSubGroupNotAvailableTime;

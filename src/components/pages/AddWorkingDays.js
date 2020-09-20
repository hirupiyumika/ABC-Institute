import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
import AddWorkingDaysForm from "./../forms/AddWorkingDaysForm";
import { DaysAndHoursContext } from "./../../context/DaysAndHoursProvider";

class AddWorkingDays extends Component {
  static contextType = DaysAndHoursContext;

  render() {
    const { AddWorkingDays, show, variant, message } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Working Days</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddWorkingDaysForm AddWorkingDays={AddWorkingDays} />
          {show && <Alert variant={variant}>{message}</Alert>}
        </Container>
      </React.Fragment>
    );
  }
}

export default AddWorkingDays;

import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
import AddWorkingHoursFrom from "../forms/AddWorkingHoursForm";
import { DaysAndHoursContext } from "../../context/DaysAndHoursProvider";

class AddWorkingHours extends Component {
  static contextType = DaysAndHoursContext;

  render() {
    const { AddWorkingHours, show, variant, message } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Working Hours</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddWorkingHoursFrom AddWorkingHours={AddWorkingHours} />
          {show && <Alert variant={variant}>{message}</Alert>}
        </Container>
      </React.Fragment>
    );
  }
}

export default AddWorkingHours;

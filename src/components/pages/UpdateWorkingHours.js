import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UpdateWorkingHoursForm from "../forms/UpdateWorkingHoursForm";
import { DaysAndHoursContext } from "../../context/DaysAndHoursProvider";

class UpdateWorkingHours extends Component {
  static contextType = DaysAndHoursContext;

  render() {
    const {
      updateWorkingHours,
      show,
      variant,
      message,
      filteredWorkingDays,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Update Working Hour</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateWorkingHoursForm
            updateWorkingHours={updateWorkingHours}
            filteredWorkingDays={filteredWorkingDays}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateWorkingHours;

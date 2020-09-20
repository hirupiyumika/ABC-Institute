import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UpdateWorkingDaysForm from "../forms/UpdateWorkingDaysForm";
import { DaysAndHoursContext } from "../../context/DaysAndHoursProvider";

class UpdateWorkingDays extends Component {
  static contextType = DaysAndHoursContext;

  render() {
    const {
      updateWorkingDays,
      show,
      variant,
      message,
      filteredWorkingDays,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Update Working Day</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateWorkingDaysForm
            updateWorkingDays={updateWorkingDays}
            filteredWorkingDays={filteredWorkingDays}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateWorkingDays;

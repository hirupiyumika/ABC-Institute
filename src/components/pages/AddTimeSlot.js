import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
// import AcademicYearAndSemesterTable from "./../tables/AcademicYearAndSemesterTable";
import AddTimeSlotsForm from "../forms/AddTimeSlotsForm";
import { DaysAndHoursContext } from "../../context/DaysAndHoursProvider";

class AddTimeSlots extends Component {
  static contextType = DaysAndHoursContext;

  render() {
    const {
      AddTimeSlot,
      updateTimeSlot,
      show,
      variant,
      message,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Time Slots</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddTimeSlotsForm
            AddTimeSlot={AddTimeSlot}
            updateTimeSlot={updateTimeSlot}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
        </Container>
      </React.Fragment>
    );
  }
}

export default AddTimeSlots;

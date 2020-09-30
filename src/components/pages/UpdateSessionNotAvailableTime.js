// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "../../context/StudentContext";
import UpdateSessionNotAvailableTimeForm from "./../sessionNotAvailableTime/UpdateSessionNotAvailableTimeForm";
import SessionNotAvailableTimeTable from "./../sessionNotAvailableTime/SessionNotAvailableTimeTable";

class UpdateSessionNotAvailableTime extends Component {
  static contextType = StudentContext;

  render() {
    const {
      updateSessionNotAvailableTime,
      show,
      variant,
      message,
      filteredSessionsNotAvailableTime,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            Update Session Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateSessionNotAvailableTimeForm
            updateSessionNotAvailableTime={updateSessionNotAvailableTime}
            filteredSessionsNotAvailableTime={filteredSessionsNotAvailableTime}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <SessionNotAvailableTimeTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateSessionNotAvailableTime;

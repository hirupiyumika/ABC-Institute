// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SessionNotAvailableTimeTable from "./../sessionNotAvailableTime/SessionNotAvailableTimeTable";

class ViewSessionNotAvailableTime extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            View Session Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <SessionNotAvailableTimeTable />
      </React.Fragment>
    );
  }
}

export default ViewSessionNotAvailableTime;

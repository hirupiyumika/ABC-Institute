// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SubGroupNotAvailableTimeTable from "./../subGroupNotAvailableTime/SubGroupNotAvailableTimeTable";

class ViewSubGroupNotAvailableTime extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            View Sub Group Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <SubGroupNotAvailableTimeTable />
      </React.Fragment>
    );
  }
}

export default ViewSubGroupNotAvailableTime;

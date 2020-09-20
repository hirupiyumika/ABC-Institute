import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import WorkingHoursTable from "../tables/WorkingHoursTable";

class ViewWorkingHours extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Working Hours</Breadcrumb.Item>
        </Breadcrumb>
        <WorkingHoursTable />
      </React.Fragment>
    );
  }
}

export default ViewWorkingHours;

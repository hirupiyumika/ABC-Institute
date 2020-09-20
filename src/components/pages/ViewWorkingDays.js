import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import WorkingDaysTable from "./../tables/WorkingDaysTable";

class ViewWorkingDays extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Working Days</Breadcrumb.Item>
        </Breadcrumb>
        <WorkingDaysTable />
      </React.Fragment>
    );
  }
}

export default ViewWorkingDays;

// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import GroupNotAvailableTimeTable from "./../groupNotAvailableTime/GroupNotAvailableTimeTable";

class ViewGroupNotAvailableTime extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            View Group Not Available Time
          </Breadcrumb.Item>
        </Breadcrumb>
        <GroupNotAvailableTimeTable />
      </React.Fragment>
    );
  }
}

export default ViewGroupNotAvailableTime;

import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import ViewConsecutiveSessionScreen from "../consecutiveSession/ViewConsecutiveSessionScreen";

class ViewConsecutiveSession extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Consecutive Sessions</Breadcrumb.Item>
        </Breadcrumb>
        <ViewConsecutiveSessionScreen />
      </React.Fragment>
    );
  }
}

export default ViewConsecutiveSession;

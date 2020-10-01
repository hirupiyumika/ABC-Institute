import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import ViewParallelSessionScreen from "./../parallelSessions/ViewParallelSessionScreen";

class ViewParallelSession extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Parallel Sessions</Breadcrumb.Item>
        </Breadcrumb>
        <ViewParallelSessionScreen />
      </React.Fragment>
    );
  }
}

export default ViewParallelSession;

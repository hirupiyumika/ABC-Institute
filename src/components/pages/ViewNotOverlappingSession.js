import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import ViewNotOverlappingSessionScreen from "./../notOverlappingSession/ViewNotOverlappingSessionScreen";

class ViewNotOverlappingSession extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Not Overlapping Session</Breadcrumb.Item>
        </Breadcrumb>
        <ViewNotOverlappingSessionScreen />
      </React.Fragment>
    );
  }
}

export default ViewNotOverlappingSession;

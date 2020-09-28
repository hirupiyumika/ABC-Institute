// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SubGroupTable from "./../subGroup/SubGroupTable";

class ViewSubGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Sub Groups</Breadcrumb.Item>
        </Breadcrumb>
        <SubGroupTable />
      </React.Fragment>
    );
  }
}

export default ViewSubGroup;

// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import GroupTable from "./../tables/GroupTable";

class ViewGroup extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Groups</Breadcrumb.Item>
        </Breadcrumb>
        <GroupTable />
      </React.Fragment>
    );
  }
}

export default ViewGroup;

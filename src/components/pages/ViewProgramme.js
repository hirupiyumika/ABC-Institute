// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ProgrammeTable from "./../tables/ProgrammeTable";

class ViewProgramme extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Programmes</Breadcrumb.Item>
        </Breadcrumb>
        <ProgrammeTable />
      </React.Fragment>
    );
  }
}

export default ViewProgramme;

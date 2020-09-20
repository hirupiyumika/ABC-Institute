// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TagTable from "./../tables/TagTable";

class ViewTag extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>View Tags</Breadcrumb.Item>
        </Breadcrumb>
        <TagTable />
      </React.Fragment>
    );
  }
}

export default ViewTag;

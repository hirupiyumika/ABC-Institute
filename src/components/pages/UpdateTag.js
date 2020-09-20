// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UpdateTagForm from "./../forms/UpdateTagForm";
import TagTable from "./../tables/TagTable";
import { StudentContext } from "./../../context/StudentContext";

class UpdateTag extends Component {
  static contextType = StudentContext;

  render() {
    const { updateTag, show, variant, message, filteredTag } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Update Tag</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateTagForm updateTag={updateTag} filteredTag={filteredTag} />
          {show && <Alert variant={variant}>{message}</Alert>}
          <TagTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateTag;

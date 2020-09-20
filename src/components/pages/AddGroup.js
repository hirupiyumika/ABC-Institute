// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "./../../context/StudentContext";
import AddGroupForm from "./../forms/AddGroupForm";
import GroupTable from "./../tables/GroupTable";

class AddGroup extends Component {
  static contextType = StudentContext;

  render() {
    const { addGroup, show, variant, message } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Group</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddGroupForm addGroup={addGroup} />
          {show && <Alert variant={variant}>{message}</Alert>}
          <GroupTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddGroup;

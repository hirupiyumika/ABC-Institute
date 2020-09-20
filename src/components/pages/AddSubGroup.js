// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "./../../context/StudentContext";
import AddSubGroupForm from "./../forms/AddSubGroupForm";
import SubGroupTable from "./../tables/SubGroupTable";

class AddSubGroup extends Component {
  static contextType = StudentContext;

  render() {
    const { addSubGroup, show, variant, message } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Sub Group</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddSubGroupForm addSubGroup={addSubGroup} />
          {show && <Alert variant={variant}>{message}</Alert>}
          <SubGroupTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddSubGroup;

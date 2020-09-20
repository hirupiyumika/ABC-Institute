// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UpdateGroupForm from "./../forms/UpdateGroupForm";
import GroupTable from "./../tables/GroupTable";
import { StudentContext } from "./../../context/StudentContext";

class UpdateGroup extends Component {
  static contextType = StudentContext;

  render() {
    const { updateGroup, show, variant, message, filteredGroup } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Update Group</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateGroupForm
            updateGroup={updateGroup}
            filteredGroup={filteredGroup}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <GroupTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateGroup;

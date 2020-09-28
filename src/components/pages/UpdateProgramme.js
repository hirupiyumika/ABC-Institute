// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import UpdateProgrammeForm from "./../programme/UpdateProgrammeForm";
import ProgrammeTable from "./../programme/ProgrammeTable";
import { StudentContext } from "./../../context/StudentContext";

class UpdateProgramme extends Component {
  static contextType = StudentContext;

  render() {
    const {
      updateProgramme,
      show,
      variant,
      message,
      filteredProgramme,
    } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Update Programme</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <UpdateProgrammeForm
            updateProgramme={updateProgramme}
            filteredProgramme={filteredProgramme}
          />
          {show && <Alert variant={variant}>{message}</Alert>}
          <ProgrammeTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default UpdateProgramme;

// IT18233704 -  N.R Yamasinghe
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { StudentContext } from "./../../context/StudentContext";
import AddProgrammeForm from "./../programme/AddProgrammeForm";
import ProgrammeTable from "./../programme/ProgrammeTable";

class AddProgramme extends Component {
  static contextType = StudentContext;

  render() {
    const { addProgramme, show, variant, message } = this.context;

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Add Programme</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <AddProgrammeForm addProgramme={addProgramme} />
          {show && <Alert variant={variant}>{message}</Alert>}
          <ProgrammeTable />
        </Container>
      </React.Fragment>
    );
  }
}

export default AddProgramme;

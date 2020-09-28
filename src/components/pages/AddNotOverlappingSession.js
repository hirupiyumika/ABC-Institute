import React, { useContext } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { LogContext } from "./../../context/context";
import { StudentContext } from "./../../context/StudentContext";
import AddAddNotOverlappingSessionForm from "./../notOverlappingSession/AddNotOverlappingSessionForm";

const AddNotOverlappingSession = () => {
  const { primarySessions } = useContext(LogContext);
  const { show, variant, message } = useContext(StudentContext);
  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Add NotOverlapping Session</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <AddAddNotOverlappingSessionForm primarySessions={primarySessions} />
        {show && <Alert variant={variant}>{message}</Alert>}
      </Container>
    </React.Fragment>
  );
};
export default AddNotOverlappingSession;

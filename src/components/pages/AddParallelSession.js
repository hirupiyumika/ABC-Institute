import React, { useContext } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { LogContext } from "./../../context/context";
import { StudentContext } from "./../../context/StudentContext";
import AddParallelSessionForm from "./../parallelSessions/AddParallelSessionForm";
import ViewParallelSessionScreen from "./../parallelSessions/ViewParallelSessionScreen";

const AddParallelSession = () => {
  const { primarySessions } = useContext(LogContext);
  const { show, variant, message } = useContext(StudentContext);
  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Parallel Session</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <AddParallelSessionForm primarySessions={primarySessions} />
        {show && <Alert variant={variant}>{message}</Alert>}
        <ViewParallelSessionScreen />
      </Container>
    </React.Fragment>
  );
};
export default AddParallelSession;

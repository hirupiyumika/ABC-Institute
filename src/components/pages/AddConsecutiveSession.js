import React, { useContext } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { LogContext } from "./../../context/context";
import { StudentContext } from "./../../context/StudentContext";
import AddConsecutiveSessionForm from "./../consecutiveSession/AddConsecutiveSessionForm";
import ViewConsecutiveSessionScreen from "./../consecutiveSession/ViewConsecutiveSessionScreen";
const AddConsecutiveSession = () => {
  const { primarySessions } = useContext(LogContext);
  const { show, variant, message } = useContext(StudentContext);
  return (
    <React.Fragment>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Add Consecutive Session</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <AddConsecutiveSessionForm primarySessions={primarySessions} />
        {show && <Alert variant={variant}>{message}</Alert>}
        <ViewConsecutiveSessionScreen />
      </Container>
    </React.Fragment>
  );
};
export default AddConsecutiveSession;

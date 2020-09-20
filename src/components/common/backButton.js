import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = ({ history }) => (
  <button onClick={() => history.goBack()}>Go Back</button>
);

export default withRouter(GoBack);

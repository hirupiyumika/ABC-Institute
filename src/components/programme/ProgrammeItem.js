// IT18233704 -  N.R Yamasinghe
import React from "react";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";

const ProgrammeItem = ({
  programme: { _id, programme, createdDate },
  deleteProgramme,
  filterProgramme,
}) => {
  return (
    <tr>
      <td>{programme}</td>
      <td>
        <Moment format="MMMM Do YYYY">{new Date(createdDate)}</Moment>
      </td>
      <td>
        <Moment format="h:mm:ss a">{new Date(createdDate)}</Moment>
      </td>
      <td>
        <Link to="/updateProgramme">
          <Button
            variant="primary"
            size="sm"
            onClick={() => filterProgramme(_id)}
          >
            <EditButton />
          </Button>
        </Link>
      </td>
      <td>
        <Button variant="danger" size="sm" onClick={() => deleteProgramme(_id)}>
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default ProgrammeItem;
